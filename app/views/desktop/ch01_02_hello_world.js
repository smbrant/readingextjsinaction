/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch1" target="_blank">Chapter 1</a>
 *
*/
var win = new Ext.Window({
  title    : 'My first Ext JS Window',
  width    : 300,
  height   : 150,
  layout   : 'fit',
  autoLoad : {             /* 2 */
      url      : 'sayHi.html',
      scripts  : true
      }
});
win.show();                /* 3 */













































show_code('section 1.6','app/views/desktop/ch01_02_hello_world.js');
