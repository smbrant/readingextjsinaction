/*
 * 
 */
Rwt.tb.hide(); /* hide the toolbar */

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

