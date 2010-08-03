Rwt.tb.hide(); /* hide toolbar to preserve the original example layout */
viewport= new Ext.Viewport({
    layout : 'border',
    id: 'viewport',
    items : [
    {
        height : 100,
        region : 'north',
        title : 'Does Santa live here?'
    },
    {
        width : 150,
        region : 'west',
        title : 'The west region rules'
    },
    {
        region : 'center',
        title : 'No, this region rules!',
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
});
/*
new Ext.Window({
    title: 'Viewport container',
    x: 0, y:0,
    height: 300,
    width: 500,
    items: [viewport]
})
*/