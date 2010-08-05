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
    title:'Hold on there cowboy!',
    msg:'Are you sure you want to reboot the internet?',
    width:300,
    buttons:Ext.MessageBox.YESNOCANCEL,
    fn:myCallback,
    icon:Ext.MessageBox.ERROR
});






































show_code('section 4.2.3','app/views/desktop/ch04_06_messagebox_2.js');
