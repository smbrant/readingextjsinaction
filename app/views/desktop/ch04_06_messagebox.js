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

/*
var msg= 'Your document was saved successfully';
var title = 'Save status:';
Ext.MessageBox.alert(title, msg);
*/

var msg= 'Please enter your email address.';
var title = 'Input Required';
Ext.MessageBox.prompt(title, msg, myCallback);
