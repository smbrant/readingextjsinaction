/* 
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
})
