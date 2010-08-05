/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch3" target="_blank">Chapter 3</a>
 *
 * I just added a button to destroy the viewport and rebuild the original screen.
 *
 */
Rwt.tb.hide(); /* hide toolbar to preserve the original example layout */
Ext.getCmp('codeview').hide(); /* and the code view panel */

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
                  Ext.getCmp('codeview').show(); /* and the code view */
                  Ext.getCmp('codeview').doLayout(); /* force layout redo */
              }
            }
        ]
    }
    ]
});





















show_code("section 3.4.3","app/views/desktop/ch03_07_viewport_container.js");
