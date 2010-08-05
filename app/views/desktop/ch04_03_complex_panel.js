/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch4" target="_blank">Chapter 4</a>
 *
 * Listing 4.2 Adding buttons and tools to our existing panel
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

new Ext.Window({  /* instead of panel */
    width:200,
    height:150,
    title:'Ext Panels rock!',
    collapsible :true,
    tbar:myTopToolbar,
    bbar:myBottomToolbar,
    html: 'My first Toolbar Panel!',
    buttons: [
    {
        text:'Press me!',
        handler:myBtnHandler
    }
    ],
    tools: [
    {
        id: 'gear',
        handler: function(evt, toolEl, panel) {
            toolClassNames = toolEl.dom.className.split(' ');
            toolClass= toolClassNames[1];
            toolId= toolClass.split('-')[2];

            Ext.MessageBox.alert('You Clicked', 'Tool ' + toolId);

        }
    },
    {
        id: 'help',
        handler : function() {
            Ext.MessageBox.alert('You Clicked', 'The help tool');
        }

    }
    ]
}).show();









show_code('section 4.1.1','app/views/desktop/ch04_03_complex_panel.js');
