/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */
var myWin = new Ext.Window({
    height: 200,
    width: 300,
    border: false,
    title: 'A Window with an accordion layout',
    layout: 'accordion',
    layoutConfig : {
        animate : true
    },
    items : [
    {
        xtype: 'form',
        title: 'General info',
        bodyStyle: 'padding: 5px',
        defaultType : 'field',
        labelWidth : 50,
        items:[
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
        title :'Bio',
        layout :'fit',
        items :{
            xtype: 'textarea',
            value: 'Tell us about yourself'
        }
    },
    {
        title : 'Instructions',
        html : 'Please enter information.',
        tools : [
            { id : 'gear' }, { id:'help' }
        ]
    }
    ]
});

myWin.show();









show_code("section 5.6","app/views/desktop/ch05_06_accordion_layout.js");
