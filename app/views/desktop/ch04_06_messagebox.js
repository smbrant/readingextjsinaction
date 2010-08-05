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

/*
var msg= 'Your document was saved successfully';
var title = 'Save status:';
Ext.MessageBox.alert(title, msg);
*/

var msg= 'Please enter your email address.';
var title = 'Input Required';
Ext.MessageBox.prompt(title, msg, myCallback);






































show_code('section 4.2.2','app/views/desktop/ch04_06_messagebox.js');
