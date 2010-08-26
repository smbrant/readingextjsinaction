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

var pagingToolbar = {
    xtype : 'paging',
    store : remoteJsonStore,
    pageSize : 50,
    displayInfo : true
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






show_code("section 8.2","app/views/desktop/ch08_01_editor_grid_panel.js");
