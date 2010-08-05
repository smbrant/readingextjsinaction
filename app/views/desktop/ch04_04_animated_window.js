/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch4" target="_blank">Chapter 4</a>
 *
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
    x: 150, y: 300,
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





































show_code('section 4.2','app/views/desktop/ch04_04_animated_window.js');
