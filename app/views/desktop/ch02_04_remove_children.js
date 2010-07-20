/* 
 * Removing children nodes of div1
 * See CSS selectors at http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#selectors
 */
var myDiv1 = Ext.get('div1');
var firstChild = myDiv1.down('div:first-child');
firstChild.remove();

var lastChild = myDiv1.down('div:last-child');
lastChild.remove();

Ext.get('child4').remove();




