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
                handler:function(){myPanel.render(Ext.get('divTest'))}
        })
    ],
    html:"<div id='divTest'></div>"
}).show();
