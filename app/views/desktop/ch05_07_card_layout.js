/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */
var handleNav = function(btn) {
    var activeItem    = myWin.layout.activeItem;
    var index    = myWin.items.indexOf(activeItem);
    var numItems    = myWin.items.getCount() - 1;
    var indicatorEl = Ext.getCmp('indicator').el;
    if (btn.text == 'Forward' && index < numItems - 1) {
        index++;
        myWin.layout.setActiveItem(index);
        index++;
        indicatorEl.update(index + ' of ' + numItems);
    }
    else if (btn.text == 'Back' && index > 0) {
        myWin.layout.setActiveItem(index - 1);
        indicatorEl.update(index + ' of ' + numItems);
    }
};

var myWin = new Ext.Window({
    height: 200,
    width: 300,
    border: false,
    title: 'A Window with a Card layout',
    layout: 'card',
    activeItem: 0,
    defaults: {
        border : false
    },
    items: [
        {
            xtype        : 'panel',
            fieldLabel        : '',
            labelSeparator : '',
            frame        : true,
            title        : 'Instructions',
            html        : 'Please fill in the form',
            anchor: '-4'
        },
        {
            xtype: 'form',
            title: 'General info',
            bodyStyle: 'padding: 5px',
            defaultType : 'field',
            labelWidth : 50,
            items: [
                {
                    fieldLabel : 'Name',
                    anchor: '-10'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel : 'Age',
                    width: 30
                },
                {
                    xtype:'combo',
                    fieldLabel:'Location',
                    anchor:'-10',
                    store:[ 'Here', 'There', 'Anywhere' ]
                }
            ]
        },
        {
            xtype :'panel',
            autoEl :{},
            title :'Bio',
            layout :'fit',
            items : {
                xtype: 'textarea',
                value: 'Tell us about yourself'
            }
        },
        {
            title : 'Congratulations',
            html : 'Thank you for filling out our form!'
        }
    ],
    bbar : [
        {
            text: 'Back',
            handler : handleNav
        },'-',
        {
            text: 'Forward',
            handler : handleNav
        },'->',
        {
            xtype : 'box',
            id: 'indicator',
            style : 'margin-right: 5px',
            autoEl : {
                tag : 'div',
                html : '1 of 3'
            }
        }
    ]
});

myWin.show();









show_code("section 5.7","app/views/desktop/ch05_07_card_layout.js");
