/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch8" target="_blank">Chapter 8</a>
 * 
 */

var remoteProxy = new Ext.data.ScriptTagProxy({
    url : 'http://extjsinaction.com/dataQuery.php'
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
},
{
    name : 'newRecordId',
    mapping : 'newRecordId'
}
];
var remoteJsonStore = new Ext.data.JsonStore({
    proxy : remoteProxy,
    storeId : 'ourRemoteStore',
    root : 'records',
    autoLoad : false,
    totalProperty : 'totalCount',
    remoteSort : true,
    fields : recordFields,
    idProperty : 'id'
});

var textFieldEditor = new Ext.form.TextField(); /* 1 */
var comboEditor = { /* 2 */
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
var numberFieldEditor = { /* 3 */
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



var onSave = function() {
    var modified = remoteJsonStore.getModifiedRecords();
    if (modified.length > 0) {
        var recordsToSend = [];
        Ext.each(modified, function(record) {
            recordsToSend.push(record.data);
        });
        var grid = Ext.getCmp('myEditorGrid');
        grid.el.mask('Updating', 'x-mask-loading');
        grid.stopEditing();
        recordsToSend = Ext.encode(recordsToSend);
        Ext.Ajax.request({
            url : '/code/bring/public/ch08/successTrue.js',
            params : {
                recordsToInsertUpdate : recordsToSend
            },
            success : function(response) {
                grid.el.unmask();
                remoteJsonStore.commitChanges();
            }
        });
    }
};
var onRejectChanges = function() {
    remoteJsonStore.rejectChanges();
};

var pagingToolbar = {
    xtype : 'paging',
    store : remoteJsonStore,
    pageSize : 50,
    displayInfo : true,
    items : [
    '-',
    {
        text : 'Save Changes',
        handler : onSave
    },
    '-',
    {
        text : 'Reject Changes',
        handler : onRejectChanges
    },
    '-'
    ]
};


var doDelete = function(rowToDelete) {
    var grid = Ext.getCmp('myEditorGrid');
    var recordToDelete = grid.store.getAt(rowToDelete);
    if (recordToDelete.phantom) {
        grid.store.remove(recordToDelete);
        return;
    }
    grid.el.mask('Updating', 'x-mask-loading');
    Ext.Ajax.request({
        url : '/code/bring/public/ch08/successTrue.js',
        parameters : {
            rowToDelete : recordToDelete.id
        },
        success : function() {
            grid.el.unmask();
            grid.store.remove(recordToDelete);
        }
    });
};
var onDelete = function() {
    var grid = Ext.getCmp('myEditorGrid');
    var selected = grid.getSelectionModel().getSelectedCell();
    Ext.MessageBox.confirm(
        'Confirm delete',
        'Are you sure?',
        function(btn) {
            if (btn == 'yes') {
                doDelete(selected[0]);
            }
        }
        );
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






show_code("section 8.4","app/views/desktop/ch08_02_editor_grid_crud.js");
