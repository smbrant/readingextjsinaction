/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch2" target="_blank">Chapter 2</a>
 *
 * Removing children nodes of div1
 * See CSS selectors at http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#selectors
 */
var myDiv1 = Ext.get('div1');
var firstChild = myDiv1.down('div:first-child');
firstChild.remove();

var lastChild = myDiv1.down('div:last-child');
lastChild.remove();

Ext.get('child4').remove();














































/*
 * don't worry with the following code,
 * just auxiliary functions to show you this source code.
 *
*/
show_code('section 2.2.4','app/views/desktop/ch02_04_remove_children.js');
Ext.getCmp('codeview').activate(0);

