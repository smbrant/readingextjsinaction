/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch7" target="_blank">Chapter 7</a>
 * 
 */


var recordFields = [ /* 1 */
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
    name : 'zip',
    mapping : 'zip'
},
{
    name : 'country',
    mapping : 'country'
}
];

proxy= new Ext.data.ScriptTagProxy({
    url : 'http://extjsinaction.com/dataQuery.php',
    baseParams:{
        limit:50
    }
});

var remoteJsonStore = new Ext.data.JsonStore({ /* 2 */
    proxy: proxy,
    fields : recordFields,
    totalProperty : 'totalCount',
    root : 'records',
    id : 'ourRemoteStore',
    autoLoad : true,
    remoteSort : true
});

/*
var remoteJsonStore = new Ext.data.JsonStore({ 
    fields : recordFields,
    url : 'http://extjsinaction.com/dataQuery.php',
    totalProperty : 'totalCount',
    root : 'records',
    id : 'ourRemoteStore',
    autoLoad : true,
    remoteSort : true
});
 */

var colorTextBlue = function(id) {
    return '<span style="color: #0000FF;">' + id + '</span>';
};
var stylizeAddress = function(street, column, record) {
    var city = record.get('city');
    var state = record.get('state');
    var zip = record.get('zip');
    return String.format('{0}<br />{1} {2}, {3}', street, city, state, zip );
};

var columnModel = [
{
    header : 'ID',
    dataIndex : 'id',
    sortable : true,
    width : 50,
    resizable : false,
    hidden : true, /* 1 */
    renderer : colorTextBlue /* 2 */
},
{
    header : 'Last Name',
    dataIndex : 'lastname',
    sortable : true,
    hideable : false,
    width : 75
},
{
    header : 'First Name',
    dataIndex : 'firstname',
    sortable : true,
    hideable : false,
    width : 75
},
{
    header : 'Address',
    dataIndex : 'street',
    sortable : false,
    id : 'addressCol',
    renderer : stylizeAddress /* 3 */
},
{
    header : 'Country',
    dataIndex : 'country',
    sortable : true,
    width : 150
}
];

var doMsgBoxAlert = function(thisGrid){
    var record = thisGrid.selModel.getSelected();
    var firstName = record.get('firstname');
    var lastName = record.get('lastname');
    var msg = String.format('The record you chose:<br> {0}, {1}', lastName, firstName);
    Ext.MessageBox.alert('', msg);
};
var doRowDblClick = function(thisGrid) {
    doMsgBoxAlert(thisGrid);
};
var doRowCtxMenu = function(thisGrid, rowIndex, evtObj) {
    evtObj.stopEvent();
    thisGrid.getSelectionModel().selectRow(rowIndex);
    if (! thisGrid.rowCtxMenu) {
        thisGrid.rowCtxMenu = new Ext.menu.Menu({
            items : {
                text : 'View Record',
                handler : function() {
                    doMsgBoxAlert(thisGrid);
                }
            }
        });
    }
    thisGrid.rowCtxMenu.showAt(evtObj.getXY());
};


var pagingToolbar = { /* 1 */
    xtype : 'paging',
    store : remoteJsonStore,
    pageSize : 50,
    displayInfo : true
};
var grid = { /* 2 */
    xtype : 'grid',
    columns : columnModel,
    store : remoteJsonStore,
    loadMask : true,
    bbar : pagingToolbar,
    autoExpandColumn : 'addressCol',
    selModel : new Ext.grid.RowSelectionModel({
        singleSelect: true
    }),
    stripeRows : true,
    listeners : {
        rowdblclick : doRowDblClick,
        rowcontextmenu : doRowCtxMenu,
        destroy: function(thisGrid){
            if (thisGrid.rowCtxMenu) thisGrid.rowCtxMenu.destroy();
        }
    }
};

new Ext.Window({ /* 1 */
    height : 350,
    width : 550,
    border : false,
    layout : 'fit',
    items : grid
}).show();

/*
Ext.StoreMgr.get('ourRemoteStore').load({
    params : {
        start : 0,
        limit : 50
    }
});

*/





show_code("sections 7.4","app/views/desktop/ch07_02_adv_grid_panel.js");
