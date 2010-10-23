/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch12" target="_blank">Chapter 12</a>
 * 
 */


var tbar = {
    items : [
    {
        text : 'Add',
        iconCls : 'icon-add'
    },
    '-',
    {
        text : 'Update',
        iconCls : 'icon-update'
    },
    '-',
    {
        text : 'Delete',
        iconCls : 'icon-delete'
    },
    '->',
    'Select one of these: ',
    {
        xtype : 'combo',
        width : 100,
        store : [
        'Toolbars',
        'Are',
        'Awesome'
        ]
    }
    ]
};


new Ext.Window({
    title: 'Toolbars',
    height: 400,
    width: 400,
    tbar: tbar
}).show();




var genericHandler = function(menuItem) {
    Ext.MessageBox.alert('', 'Your choice is ' + menuItem.text);
};
var copyAction = new Ext.Action({
    text : 'Copy',
    iconCls : 'icon-page_white_copy',
    handler : genericHandler
});
var cutAction = new Ext.Action({
    text : 'Cut',
    iconCls : 'icon-cut',
    handler : genericHandler
});
var pasteAction = new Ext.Action({
    text : 'Paste',
    iconCls : 'icon-paste_plain',
    handler : genericHandler
});
var editMenuBtn = {
    text : 'Edit',
    menu : [
    cutAction,
    copyAction,
    pasteAction
    ]
};
new Ext.Window({
    width : 300,
    height : 200,
    tbar : [
    editMenuBtn,
    '->',
    cutAction,
    copyAction,
    pasteAction
    ]
}).show();





show_code("section 12.4","app/views/desktop/ch12_03_toolbars.js");

