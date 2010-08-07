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
            anchor : '-50, -150',
            frame : true
        },
        {
            title : 'Panel2',
            height: 150,
            anchor : '-10',
            frame : true
        }
    ]
});
myWin.show();































show_code("section 5.2","app/views/desktop/ch05_02_anchor_layout_1.js");
