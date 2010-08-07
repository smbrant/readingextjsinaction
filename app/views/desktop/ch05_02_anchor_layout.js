/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */
var myWin = new Ext.Window({
    height: 300,
    width: 300,
    layout: 'anchor',
    border: false,
    anchorSize: '400',
    items: [
        {
            title : 'Panel1',
            anchor : '100%, 25%',
            frame : true
        },
        {
            title : 'Panel2',
            anchor : '0, 50%',
            frame : true
        },
        {
            title : 'Panel3',
            anchor : '50%, 25%',
            frame : true
        }
    ]
});
myWin.show();































show_code("section 5.2","app/views/desktop/ch05_02_anchor_layout.js");
