/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch12" target="_blank">Chapter 12</a>
 * 
 */



var genericHandler = function(menuItem) {
    Ext.MessageBox.alert('', 'Your choice is ' + menuItem.text);
};
var genericMenuItem = {
    text : 'Generic Item',
    handler : genericHandler,
    iconCls : 'icon-accept'
};
var newDepartment = {
    text : 'New Department',
    iconCls : 'icon-group_add',
    menu : [
    {
        xtype : 'menutextitem',
        text : 'Choose One',
        style : {
            'border' : '1px solid #999999',
            'margin' : "0px 0px 1px 0px",
            'display' : 'block',
            'padding' : '3px',
            'font-weight' : 'bold',
            'font-size' : '12px',
            'text-align' : 'center',
            'background-color' : '#D6E3F2'
        }
    },
    {
        text : 'Management',
        iconCls : 'icon-user_suit_black',
        handler : genericHandler
    },
    {
        text : 'Accounting',
        iconCls : 'icon-user_green',
        handler : genericHandler
    },
    {
        text : 'Sales',
        iconCls : 'icon-user_brown',
        handler : genericHandler
    }
    ]
};

var colorAndDateHandler = function(picker, choice) {
    Ext.MessageBox.alert('', 'Your choice is ' + choice);
};
var colorMenuItem = {
    text : 'Choose Color',
    iconCls : 'icon-color_swatch',
    menu : {
        xtype : 'colormenu',
        handler : colorAndDateHandler
    }
};
var dateMenuItem = {
    text : 'Choose Date',
    iconCls : 'icon-calendar',
    menu : {
        xtype : 'datemenu',
        handler : colorAndDateHandler
    }
};

var singleCheckItem = {
    text : 'Check me',
    checked : false,
    checkHandler : colorAndDateHandler
};

var setFlagColor = function(menuItem, checked) {
    if (checked === true) {
        var color = menuItem.text.toLowerCase();
        var iconCls = 'icon-flag_' + color;
        Ext.getCmp('colorMenu').setIconClass(iconCls);
    }
};
var colorCheckMenuItem = {
    text : 'Favorite Flag',
    id : 'colorMenu',
    iconCls : 'icon-help',
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
};

var menuItems = [
genericMenuItem,
'-',
newDepartment,
colorMenuItem,
dateMenuItem,
singleCheckItem,
colorCheckMenuItem
];

var menu = new Ext.menu.Menu({
    items : menuItems,
    listeners : {
        'beforehide' : function() {
            return false;
        }
    }
});
menu.showAt([100,100]);






show_code("section 12.1","app/views/desktop/ch12_01_base_menu.js");

