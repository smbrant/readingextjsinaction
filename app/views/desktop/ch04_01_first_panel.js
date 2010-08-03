/*
 * 4.1.1 Building a complex panel
 */

var myBtnHandler = function(btn) {
    Ext.MessageBox.alert('You Clicked', btn.text);
};

var fileBtn = new Ext.Button({
    text   : 'File',
    handler : myBtnHandler
});
var editBtn = new Ext.Button({
    text    : 'Edit',
    handler : myBtnHandler
});

var tbFill = new Ext.Toolbar.Fill();
var myTopToolbar = new Ext.Toolbar({
    items : [
        fileBtn,
        tbFill,
        editBtn
    ]
});
var myBottomToolbar = [
    {
        text    : 'Save',
        handler : myBtnHandler
    },
    '-',
    {
        text    : 'Cancel',
        handler : myBtnHandler
    },
    '->',
    '<b>Items open: 1</b>',
];

var myPanel = new Ext.Panel({
    width:200,
    height:150,
    id:'panel1',
    title:'Ext Panels rock!',
    collapsible :true,
    renderTo:Ext.getBody(),
    tbar:myTopToolbar,
    bbar:myBottomToolbar,
    html: 'My first Toolbar Panel!'
});

/* Better with a window. To try, comment the panel.
new Ext.Window({
    width:200,
    height:150,
    title:'Ext Panels rock!',
    collapsible :true,
    tbar:myTopToolbar,
    bbar:myBottomToolbar,
    html: 'My first Toolbar Panel!'
}).show();
*/