/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */

var myWin = new Ext.Window({
    height    : 300,
    width    : 300,
    border    : false,
    autoScroll    : true,
    title    : 'A Window with a Table layout',
    layout    :'table',
    layoutConfig : {
        columns : 3
    },
    defaults : {
        height : 50,
        width : 50
    },
    items : [
    {
        html : '1'
    },
    {
        html : '2'
    },
    {
        html : '3'
    },
    {
        html : '4'
    },
    {
        html : '5'
    },
    {
        html : '6'
    },
    {
        html : '7'
    },
    {
        html : '8'
    },
    {
        html : '9'
    }
    ]
});
myWin.show();






















show_code("section 5.9","app/views/desktop/ch05_10_table_layout.js");
