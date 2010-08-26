/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch7" target="_blank">Chapter 7</a>
 * 
 */


var arrayData = [ /* 1 */
['Jay Garcia', 'MD'],
['Aaron Baker', 'VA'],
['Susan Smith', 'DC'],
['Mary Stein', 'DE'],
['Bryan Shanley', 'NJ'],
['Nyri Selgado', 'CA']
];

var store = new Ext.data.ArrayStore({
    data : arrayData,
    fields : [ 'fullName', 'state' ]
});

var colModel = new Ext.grid.ColumnModel([ /* 1 */
{
    header : 'Full Name',
    sortable : true,
    dataIndex : 'fullName' /* 2 */
},
{
    header : 'State',
    dataIndex : 'state'
}
]);
var gridView = new Ext.grid.GridView(); /* 3 */
var selModel = new Ext.grid.RowSelectionModel({ /* 4 */
    /* singleSelect : true */
});
var grid = new Ext.grid.GridPanel({ /* 5 */
    autoHeight : true,
    store : store, /* 6 */
    view : gridView,
    colModel : colModel,
    selModel : selModel
});

new Ext.Window({
    title : 'Our first grid',
    layout: 'fit',
    width : 250,
    height : 260,
    items: grid
}).show();


















show_code("section 7.3","app/views/desktop/ch07_01_grid_panel.js");
