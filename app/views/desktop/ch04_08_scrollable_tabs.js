/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch4" target="_blank">Chapter 4</a>
 * 
 */
Rwt.tb.hide(); /* hide the toolbar */
Ext.getCmp('codeview').hide(); /* and the code view panel */

Ext.QuickTips.init();

viewport= new Ext.Viewport({
    layout : 'fit',
    title : 'Exercising scrollable tabs',
    items : {
        xtype : 'tabpanel',
        activeTab : 0,
        id : 'myTPanel',
        enableTabScroll : true,
        
        resizeTabs : true,
        minTabWidth : 75,

        items : [
        {
            title : 'our first tab',
            items:[
            {
                xtype:'button',
                text:'return',
                handler:function(){
                    viewport.destroy();
                    Rwt.tb.show();  /* show the toolbar again */
                    Ext.getCmp('codeview').show(); /* and the code view panel */
                    Ext.getCmp('codeview').doLayout();
                }
            }
            ]
        }
        ]
    }
});

(function (num) {
    for (var i = 1; i <= 30; i++) {
        var title = 'Long Title Tab # ' + i;
        Ext.getCmp('myTPanel').add({
            title: title,
            html: 'Hi, i am tab ' + i,
            tabTip: title,
            closable : true
        });
    }
}).defer(500);










show_code("section 4.3.4","app/views/desktop/ch04_08_scrollable_tabs.js");
