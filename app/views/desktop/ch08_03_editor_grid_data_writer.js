/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch8" target="_blank">Chapter 8</a>
 * 
 */

var remoteProxy = new Ext.data.ScriptTagProxy({
    api : {
        read : 'http://extjsinaction.com/dataQuery.php',
        create : 'http://extjsinaction.com/dataCreate.php',
        update : 'http://extjsinaction.com/dataUpdate.php',
        destroy : 'http://extjsinaction.com/dataDelete.php'
    }
});

var recordFields = [
{
    name : 'id',
    mapping : 'id'
},
{
    name : 'firstname',
    mapping : 'firstname'
},
{
    name : 'lastname',
    mapping : 'lastname'
},
{
    name : 'street',
    mapping : 'street'
},
{
    name : 'city',
    mapping : 'city'
},
{
    name : 'state',
    mapping : 'state'
},
{
    name : 'zipcode',
    mapping : 'zip'
}
];

var writer = new Ext.data.JsonWriter({
    writeAllFields : true
});

var remoteJsonStore = new Ext.data.JsonStore({
    proxy : remoteProxy,
    storeId : 'ourRemoteStore',
    root : 'records',
    autoLoad : false,
    totalProperty : 'totalCount',
    remoteSort : true,
    fields : recordFields,
    idProperty : 'id',
    autoSave : false,
    successProperty : 'success',
    writer : writer,
    listeners : {
        exception : function () {
            console.info(arguments);
        }
    }
});

var textFieldEditor = new Ext.form.TextField(); 
var comboEditor = {
    xtype : 'combo',
    triggerAction : 'all',
    displayField : 'state',
    valueField : 'state',
    store : {
        xtype : 'jsonstore',
        root : 'records',
        fields : ['state'],
        proxy : new Ext.data.ScriptTagProxy({
            url : 'http://extjsinaction.com/getStates.php'
        })
    }
};
var numberFieldEditor = {
    xtype : 'numberfield',
    minLength : 5,
    maxLength : 5
};

var columnModel = [
{
    header : 'Last Name',
    dataIndex : 'lastname',
    sortable : true,
    editor : textFieldEditor
},
{
    header : 'First Name',
    dataIndex : 'firstname',
    sortable : true,
    editor : textFieldEditor
},
{
    header : 'Street Address',
    dataIndex : 'street',
    sortable : true,
    editor : textFieldEditor
},
{
    header : 'City',
    dataIndex : 'city',
    sortable : true,
    editor : textFieldEditor
},
{
    header : 'State',
    dataIndex : 'state',
    sortable : true,
    editor : comboEditor
},
{
    header : 'Zip Code',
    dataIndex : 'zipcode',
    sortable : true,
    editor : numberFieldEditor
}
];

var pagingToolbar = {
    xtype : 'paging',
    store : remoteJsonStore,
    pageSize : 50,
    displayInfo : true,
    items : [
    '-',
    {
        text : 'Save Changes',
        handler : function () {
            remoteJsonStore.save();
        }
    },
    '-',
    {
        text : 'Reject Changes',
        handler : function () {
            remoteJsonStore.rejectChanges();
        }
    },
    '-'
    ]
};

var onDelete = function() {
    var grid = Ext.getCmp('myEditorGrid');
    var selected = grid.getSelectionModel().getSelectedCell();
    var recordToDelete = grid.store.getAt(selected[0]);
    grid.store.remove(recordToDelete);
};

var onInsertRecord = function() {
    var newRecord = new remoteJsonStore.recordType({
        newRecordId : Ext.id()
    });
    var grid = Ext.getCmp('myEditorGrid');
    var selectedCell = grid.getSelectionModel().getSelectedCell();
    var selectedRowIndex = selectedCell[0];
    remoteJsonStore.insert(selectedRowIndex, newRecord);
    grid.startEditing(selectedRowIndex,0);
};

var doCellCtxMenu = function(editorGrid, rowIndex, cellIndex, evtObj) {
    evtObj.stopEvent();
    if (!editorGrid.rowCtxMenu) {
        editorGrid.rowCtxMenu = new Ext.menu.Menu({
            items : [
            {
                text : 'Insert Record',
                handler : onInsertRecord
            },
            {
                text : 'Delete Record',
                handler : onDelete
            }
            ]
        });
    }
    editorGrid.getSelectionModel().select(rowIndex,cellIndex);
    editorGrid.rowCtxMenu.showAt(evtObj.getXY());
};


var grid = {
    xtype : 'editorgrid',
    columns : columnModel,
    id : 'myEditorGrid',
    store : remoteJsonStore,
    loadMask : true,
    bbar : pagingToolbar,
    stripeRows : true,
    viewConfig : {
        forceFit : true
    },
    listeners : {
        cellcontextmenu : doCellCtxMenu
    }
};


new Ext.Window({
    height : 350,
    width : 550,
    border : false,
    layout : 'fit',
    items : grid
}).show();
remoteJsonStore.load({
    params : {
        start : 0,
        limit : 50
    }
});






show_code("section 8.5","app/views/desktop/ch08_03_editor_grid_data_writer.js");
