/*
 * Listing 4.3 Building an animated window, with small refactoring
 */
var win;
var newWindow = function(btn) {
    if (! win) {
        win = new Ext.Window({
            animateTarget : btn.el,
            html: 'My first vanilla Window',
            closeAction: 'hide',
            height: 200,
            width: 300,
            constrain: true
        });
    }
    win.show();
};

new Ext.Window({
    title: 'Animated window',
    x: 50, y: 50,
    items:[
        new Ext.Button({
            text: 'Open my Window',
            handler: newWindow
        })
    ],
    listeners: {
        close: function(){if(win){win.destroy()}}
    }
}).show();


