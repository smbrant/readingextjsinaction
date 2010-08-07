/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */
var myWin = new Ext.Window({
    height   : 200,
    width    : 200,
    layout   : 'fit',
    border   : false,
    items    : [
        {
            title : 'Panel1',
            html  : 'I fit in my parent!',
            frame : true
        }
    ]
});

myWin.show();











































show_code("section 5.5","app/views/desktop/ch05_05_fit_layout.js");
