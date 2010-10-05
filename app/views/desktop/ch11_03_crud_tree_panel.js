/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch11" target="_blank">Chapter 11</a>
 * 
 */



show_code("section 11.4","app/views/desktop/ch11_03_crud_tree_panel.js");


var onConfirmDelete = function(btn) {
    if (btn == 'yes') {
        var treePanel =  Ext.getCmp('treepanel');
        treePanel.el.mask('Deleting...', 'x-mask-loading');
        var selNode = treePanel.getSelectionModel().getSelectedNode();

        Ext.Ajax.request({
            url    : '/ch11/delete_node',
            params : {
                id      : selNode.id
            },
            success : function (response, opts) {
                treePanel.el.unmask();
                var responseJson = Ext.decode(response.responseText);

                if (responseJson.success === true) {
                    selNode.remove();
                }
                else {
                    Ext.Msg.alert('An error occured with the server.');
                }
            }
        });

    }

};

var onDelete = function() {
    var treePanel =  Ext.getCmp('treepanel');
    var selNode = treePanel.getSelectionModel().getSelectedNode();

    if (selNode) {
        Ext.MessageBox.confirm(
            'Are you sure?',
            'Please confirm the deletion of ' + selNode.attributes.text,
            onConfirmDelete
            )
    }
};


var onCompleteAdd = function(treeEditor, newValue, oldValue) {
    var treePanel =  Ext.getCmp('treepanel');

    if (newValue.length > 0) {
        Ext.Ajax.request({
            url    : '/ch11/create_node',
            params : {
                newName : newValue
            },
            success : function (response, opts) {
                treePanel.el.unmask();
                var responseJson = Ext.decode(response.responseText);

                if (responseJson.success !== true) {
                    Ext.Msg.alert('An error occured with the server.');
                    treeEditor.editNode.remove();
                }
                else {
                    treeEditor.editNode.setId(responseJson.node.id);
                }
            }
        });
    }
    else {
        treeEditor.editNode.remove();
    }
};


var onAddNode = function() {
    var treePanel =  Ext.getCmp('treepanel');
    var selNode = treePanel.getSelectionModel().getSelectedNode();

    if (! this.treeEditor) {
        this.treeEditor = new Ext.tree.TreeEditor(treePanel, {}, {
            cancelOnEsc     : true,
            completeOnEnter : true,
            selectOnFocus   : true,
            allowBlank      : false,
            listeners       : {
                complete : onCompleteAdd
            }
        });
    };

    selNode.expand(null, null, function() {
        var newNodeCfg = {
            text : '',
            id   : 'tmpNode',
            leaf : (selNode.id != 'myCompany')
        };

        var newNode = selNode.insertBefore(newNodeCfg, selNode.firstChild);
        this.treeEditor.editNode = newNode;
        this.treeEditor.startEdit(newNode.ui.textNode);

    }, this);
};

var onCompleteEdit = function(treeEditor, newValue, oldValue) {
    var treePanel =  Ext.getCmp('treepanel');
    treePanel.el.mask('Saving...', 'x-mask-loading');

    var editNode = treeEditor.editNode;
    var editNodeId = editNode.id;
    Ext.Ajax.request({
        url    : '/ch11/edit_node',
        params : {
            id      : editNodeId,
            newName : newValue
        },
        success : function (response, opts) {
            treePanel.el.unmask();
            var responseJson = Ext.decode(response.responseText);
            if (responseJson.success !== true) {
                editNode.setText(oldValue);
                Ext.Msg.alert('An error occured with the server.');
            }
        },
        failure : function (response, opts) {
            treePanel.el.unmask();
            editNode.setText(oldValue);
            Ext.Msg.alert('An error occured with the server.');
        }
    });
};

var onEdit = function() {
    var treePanel = Ext.getCmp('treepanel');
    var selectedNode = treePanel.getSelectionModel().getSelectedNode();

    if (! this.treeEditor) {
        this.treeEditor = new Ext.tree.TreeEditor(treePanel, {}, {
            cancelOnEsc     : true,
            completeOnEnter : true,
            selectOnFocus   : true,
            allowBlank      : false,
            listeners       : {
                complete : onCompleteEdit
            }
        });
    };

    this.treeEditor.editNode = selectedNode;
    this.treeEditor.startEdit(selectedNode.ui.textNode);

};

var buildCtxMenu = function() {
    return new Ext.menu.Menu({
        items: [
        {
            itemId  : 'add',
            handler : onAddNode
        },
        {
            itemId  : 'edit',
            handler : onEdit,
            scope   : onEdit
        },
        {
            itemId  : 'delete',
            handler : onDelete
        },
        ]
    });
};

var onCtxMenu = function(node, evtObj) {
    node.select();
    evtObj.stopEvent();

    if (! this.ctxMenu) {
        this.ctxMenu = buildCtxMenu();
    };

    var ctxMenu    = this.ctxMenu;
    var addItem    = ctxMenu.getComponent('add');
    var editItem   = ctxMenu.getComponent('edit');
    var deleteItem = ctxMenu.getComponent('delete');

    if (node.id =='myCompany') {
        addItem.setText('Add Department');
        editItem.setText('Nope, not changing the name');
        deleteItem.setText('Can\'t delete a company, silly');

        addItem.enable();
        deleteItem.disable();
        editItem.disable();
    }
    else if (! node.leaf) {
        addItem.setText('Add Employee');
        deleteItem.setText('Delete Department');
        editItem.setText('Edit Department');

        addItem.enable();
        editItem.enable();
        deleteItem.enable();
    }
    else {
        addItem.setText('Can\'t Add Employee');
        editItem.setText('Edit Employee');
        deleteItem.setText('Delete Employee');

        addItem.disable();
        editItem.enable();
        deleteItem.enable();
    };

    ctxMenu.showAt(evtObj.getXY()) ;
};

var tree = {
    xtype      : 'treepanel',
    id         : 'treepanel',
    autoScroll : true,
    dataUrl    : '/ch11/dynamic_tree',
    animate    : false,
    root       : {
        nodeType : 'async',
        text     : 'My Company',
        id       : 'myCompany',
        expanded : true
    },
    listeners   : {
        contextmenu : onCtxMenu
    }
};

new Ext.Window({
    height     : 300,
    width      : 300,
    layout     : 'fit',
    border     : false,
    title      : 'Our first tree',
    items      : tree
}).show();
