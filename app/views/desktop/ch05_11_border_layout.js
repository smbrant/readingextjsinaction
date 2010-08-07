/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */

var centerPanel= new Ext.Panel({
    title:'Center Region',
    html:'I am disposable',
    frame:true
});
var centerRegion= new Ext.Container({
    region:'center',
    layout:'fit',
    autoEl:{},
    items:centerPanel
});
changeFunc=function(){
    centerRegion.remove(centerPanel, true);
    centerRegion.add({
        xtype        : 'form',
        frame        : true,
        bodyStyle        : 'padding: 5px',
        defaultType : 'field',
        title        : 'Please enter some information',
        defaults        : {
            anchor : '-10'
        },
        items        : [
        {
            fieldLabel : 'First Name'
        },
        {
            fieldLabel : 'Last Name'
        },
        {
            xtype            : 'textarea',
            fieldLabel : 'Bio'
        }
        ]
    });
    centerRegion.doLayout();
    this.destroy();
};
btnChange=new Ext.Button({
    text:'change center region',
    handler:changeFunc
});
var myWin = new Ext.Window({
    height    : 600,
    width    : 600,
    border    : false,
    title    : 'A Window with a Border layout',
    layout    :'border',
    defaults : {
        frame : true,
        split : true
    },
    items : [
    {
        title: 'North Panel',
        region: 'north',
        height: 100,
        minHeight: 100,
        maxHeight: 150,
        collapsible : true,
        items:btnChange
    },
    {
        title : 'South Panel',
        region : 'south',
        height : 75,
        split : false,
        margins : {
            top : 5
        }
    },
    {
        title : 'East Panel',
        region : 'east',
        width : 100,
        minWidth : 75,
        maxWidth : 150,
        collapsible : true
    },
    {
        title:'West Panel',
        region:'west',
        collapsible:true,
        collapseMode:'mini'
    },
    centerRegion
    ]
});
myWin.show();






















show_code("section 5.10","app/views/desktop/ch05_11_border_layout.js");
