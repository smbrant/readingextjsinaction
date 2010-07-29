viewport= new Ext.Viewport({
    layout : 'border',
    items : [
    {
        height : 30,
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
        title : 'No, this region rules!'
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