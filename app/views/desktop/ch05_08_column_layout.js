/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch5" target="_blank">Chapter 5</a>
 * 
 */
var myWin = new Ext.Window({
    height: 200,
    width: 400,
    autoScroll: true,
    title: 'A Window with a Card layout',
    layout: 'column',
    defaults: {
        frame : true
      },
    items: [
        {
            title: 'Col 1',
            id: 'col1',
            columnWidth : .3
        },
        {
            title: 'Col 2',
            html: "20% relative width",
            columnWidth : .2
        },
        {
            title : 'Col 3',
            html : "100px fixed width",
            width : 100
        },
        {
            title :'Col 4',
            frame :true,
            html :"50% relative width",
            columnWidth :.5
        }
    ]
});

myWin.show();





















show_code("section 5.8","app/views/desktop/ch05_08_column_layout.js");
