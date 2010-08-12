/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch6" target="_blank">Chapter 6</a>
 * 
 */

/* Local data */
var mySimpleStore = new Ext.data.ArrayStore({
    data : [
        ['Jack Slocum'], ['Abe Elias'], ['Aaron Conran'], ['Evan Trimboli']
    ],
    fields : ['name']
});
var combo = {
    xtype : 'combo',
    fieldLabel : 'Select a name',
    store : mySimpleStore,
    displayField : 'name',
    typeAhead : true,
    mode : 'local'
};


var tpl = new Ext.XTemplate(
    '<tpl for="."><div class="combo-result-item">',
    '<div class="combo-name">{name}</div>',
    '<div class="combo-full-address">{address}</div>',
    '<div class="combo-full-address">{city} {state} {zip}</div>',
    '</div></tpl>'
);

/* Remote data */
var remoteJsonStore = new Ext.data.JsonStore({
    root : 'records',
    totalProperty : 'totalCount',
    baseParams : {
        column : 'fullName'
    },
    fields : [
        {
            name : 'name',
            mapping : 'fullName'
        },
        {
            name : 'id',
            mapping : 'id'
        },
        {
            name : 'address',
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
        }
    ],
    proxy : new Ext.data.ScriptTagProxy({
        url : 'http://extjsinaction.com/dataQuery.php'
    })
});
var combo2 = {
    xtype : 'combo',
    fieldLabel : 'Search by name',
    forceSelection : true, /* 5 */
    displayField : 'name', /* 6 */
    valueField : 'id', /* 7 */
    hiddenName : 'customerId', /* 8 */
    loadingText : 'Querying....', /* 9 */
    minChars : 0, /* 10 */
    triggerAction : 'name', /* 11 */
    store : remoteJsonStore,
    pageSize : 10,
    tpl : tpl,
itemSelector : 'div.combo-result-item'
};


var fp = new Ext.form.FormPanel({
    bodyStyle : 'padding: 6px',
    labelWidth : 126,
    defaultType : 'textfield',
    defaults : {
        msgTarget : 'side',
        anchor : '-20'
    },
    items : [combo,combo2]
});

new Ext.Window({
    title : 'Exercising comboboxes',
    layout: 'fit',
    width : 500,
    height : 330,
    items:fp
}).show();
















show_code("section 6.2","app/views/desktop/ch06_02_combo_boxes.js");
