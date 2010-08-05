/* 
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch4" target="_blank">Chapter 4</a>
 * 
 * Listing 4.4 Creating a rigid modal Window
 */

var win = new Ext.Window({
    height    : 75,
    width    : 200,
    modal    : true,
    title    : 'This is one rigid window',
    html    : 'Try to move or resize me. I dare you.',
    plain    : true,
    border    : false,
    resizable    : false,
    draggable    : false,
    closable    : false,
    buttonAlign : 'center',
    buttons    : [
    {
        text        : 'I give up!',
        handler : function() {
            win.close();
        }
    }
    ]
});
win.show();
































show_code('section 4.2.1','app/views/desktop/ch04_05_rigid_modal_window.js');
