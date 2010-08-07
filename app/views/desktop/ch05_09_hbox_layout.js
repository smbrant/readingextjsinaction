/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */
new Ext.Window({
    layout    : 'hbox',
    height    : 300,
    width    : 300,
    title    : 'A Container with an HBox layout',
    layoutConfig : {
        pack : 'start'
    },
    defaults : {
        frame : true
    },
    items : [
        {
            title : 'Panel 1',
            height : 100
        },
        {
            title : 'Panel 2',
            height : 200,
            width : 100,
            items:[
                {xtype:'button',text:'pack:center',
                handler:function(){
                    var conf= this.findParentByType('window').initialConfig;
                    conf.layoutConfig.pack='center';
                    new Ext.Window(conf).show();
                }},
                {xtype:'button',text:'pack:end',
                handler:function(){
                    var conf= this.findParentByType('window').initialConfig;
                    conf.layoutConfig.pack='end';
                    new Ext.Window(conf).show();
                }},
                {xtype:'button',text:'align:stretch',
                handler:function(){
                    var conf= this.findParentByType('window').initialConfig;
                    conf.layoutConfig.align='stretch';
                    new Ext.Window(conf).show();
                }}
            ]
        },
        {
            title : 'Panel 3',
            height : 200
        }
    ]
}).show();























show_code("section 5.8","app/views/desktop/ch05_09_hbox_layout.js");
