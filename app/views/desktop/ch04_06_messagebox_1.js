/* 
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch4" target="_blank">Chapter 4</a>
 * 
 */

var myCallback = function(btn, text) {
    console.info('You pressed ' + btn);
    Rwt.debug('You pressed ' + btn);  /* for those without firebug or chrome */
    if (text) {
        console.info('You entered : ' + text);
        Rwt.debug('You entered : ' + text);
    }
};

Ext.Msg.show({
    title:'Input required:',
    msg:'Please tell us a little about yourself',
    width:300,
    buttons:Ext.MessageBox.OKCANCEL,
    multiline :true,
    fn:myCallback,
    icon:Ext.MessageBox.INFO
});





































show_code('section 4.2.3','app/views/desktop/ch04_06_messagebox_1.js');
