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
    title:'Input required:',
    msg:'Please tell us a little about yourself',
    width:300,
    buttons:Ext.MessageBox.OKCANCEL,
    multiline :true,
    fn:myCallback,
    icon:Ext.MessageBox.INFO
});







