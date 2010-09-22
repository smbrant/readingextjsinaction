/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch11" target="_blank">Chapter 11</a>
 * 
 */



var tree = {
    xtype : 'treepanel',
    autoScroll : true,
    loader : new Ext.tree.TreeLoader({
        /*url : 'getCompany.php'*/
        url: '/ch11/dynamic_tree'
    }),
    root : {
        text : 'My Company',
        id : 'myCompany' ,
        expanded : true
    }
};

new Ext.Window({
    height : 300,
    width : 300,
    layout : 'fit',
    border : false,
    title : 'Our first remote tree',
    items : tree
}).show();



















show_code("section 11.3","app/views/desktop/ch11_02_dynamic_tree_panel.js");
