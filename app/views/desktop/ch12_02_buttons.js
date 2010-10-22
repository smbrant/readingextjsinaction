/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch12" target="_blank">Chapter 12</a>
 * 
 */

var btnHandler = function(btn) {
    btn.el.frame();
};
var btn= new Ext.Button({
    text : 'Plain Button',
    iconCls : 'icon-control_power',
    handler : btnHandler
});

var setFlagColor = function(menuItem, checked) {
    if (checked === true) {
        var color = menuItem.text.toLowerCase();
        var iconCls = 'icon-flag_' + color;
        Ext.getCmp('flagButton').setIconClass(iconCls);
    }
};
var btn2= new Ext.Button({
    text : 'Favorite flag',
    iconCls : 'icon-help',
    handler : btnHandler,
    id : 'flagButton',
    menu : {
        defaults : {
            checked : false,
            group : 'colorChkGroup',
            checkHandler : setFlagColor
        },
        items : [
        {
            text : 'Red'
        },
        {
            text : 'Green'
        },
        {
            text : 'Blue'
        }
        ]
    }
});

var setFlagColor3 = function(menuItem, checked) {
    if (checked === true) {
        var color = menuItem.text.toLowerCase();
        var iconCls = 'icon-flag_' + color;
        Ext.getCmp('flagButton3').setIconClass(iconCls);
    }
};

var btn3= new Ext.SplitButton({
    text : 'Favorite flag',
    iconCls : 'icon-help',
    handler : btnHandler,
    id : 'flagButton3',
    menu : {
        defaults : {
            checked : false,
            group : 'colorChkGroup',
            checkHandler : setFlagColor3
        },
        items : [
        {
            text : 'Red'
        },
        {
            text : 'Green'
        },
        {
            text : 'Blue'
        }
        ]
    }
});

grp1= new Ext.ButtonGroup({
    title : 'Edit',
    items : [
    {
        text : 'Paste as',
        iconCls : 'icon-clipboard',
        menu : [
        {
            text : 'Plain Text',
            iconCls : 'icon-paste_plain'
        },
        {
            text : 'Word',
            iconCls : 'icon-paste_word'
        }
        ]
    },
    {
        text : 'Copy',
        iconCls : 'icon-page_white_copy'
    },
    {
        text : 'Cut',
        iconCls : 'icon-cut'
    },
    {
        text : 'Clear',
        iconCls : 'icon-erase'
    }
    ]
});

grp2= new Ext.ButtonGroup({
    renderTo : Ext.getBody(),
    title : 'Clipboard',
    columns : 2,
    items : [
    {
        text : 'Paste',
        iconCls : 'icon-clipboard_24x24',
        rowspan : '3',
        scale : 'large',
        arrowAlign : 'bottom',
        iconAlign : 'top',
        width : 50,
        menu : [

        {
            text : 'Plain Text',
            iconCls : 'icon-paste_plain'
        },
        {
            text : 'Word',
            iconCls : 'icon-paste_word'
        }
        ]
    },
    {
        iconCls : 'icon-cut'
    },
    {
        iconCls : 'icon-page_white_copy'
    },
    {
        iconCls : 'icon-paintbrush'
    }
    ]
});

new Ext.Window({
    title: 'Buttons',
    height: 400,
    width: 400,
    items: [btn,btn2,btn3,grp1,grp2]
}).show();







show_code("section 12.2","app/views/desktop/ch12_02_buttons.js");

