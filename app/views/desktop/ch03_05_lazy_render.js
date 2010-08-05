/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch3" target="_blank">Chapter 3</a>
 *
 */
var myPanel = new Ext.Panel({
    height : 50,
    width : 150,
    title : 'Lazy rendered Panel',
    frame : true
});

new Ext.Window({
    width: 200,
    height: 150,
    title: 'Lazy rendering...',
    border: false,
    items:[
        new Ext.Button({
                xtype : 'button',
                text : 'Render panel...',
                handler:function(){
                    Ext.getCmp('codeview').activate(0);
                    Ext.get('div1').show();
                    Ext.get('div1').dom.innerHTML='';
                    Ext.get('div1').setHeight(100);

                    myPanel.render(Ext.get('div1'));
                }
        })
    ]
}).show();


































show_code("section 3.2.2","app/views/desktop/ch03_05_lazy_render.js");
