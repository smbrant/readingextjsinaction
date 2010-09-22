/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch11" target="_blank">Chapter 11</a>
 * 
 */

var rootNode = {
    text : 'Root Node',
    expanded : true,
    children : [
    {
        text : 'Child 1',
        leaf : true
    },
    {
        text : 'Child 2',
        leaf : true
    },
    {
        text : 'Child 3',
        children : [
        {
            text : 'Grand Child 1',
            children : [
            {
                text : 'Grand... you get the point',
                leaf : true
            }
            ]
        }
        ]
    }
    ]
};

var tree = {
    xtype : 'treepanel',
    id : 'treepanel',
    autoScroll : true,
    /* rootVisible: false, */
    root : rootNode
};

new Ext.Window({
    height : 200,
    width : 200,
    layout : 'fit',
    border : false,
    title : 'Our first tree',
    items : tree
}).show();



















show_code("section 11.2","app/views/desktop/ch11_01_static_tree_panel.js");
