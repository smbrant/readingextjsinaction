/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch2" target="_blank">Chapter 2</a>
 *
*/

var myDiv1 = Ext.get('div1');
myDiv1.createChild('Child from a string');
myDiv1.createChild('<div>Element from a string</div>');
myDiv1.createChild({
    tag : 'div',
    html : 'Child from a config object'
});
myDiv1.createChild({
    tag       : 'div',
    id        : 'nestedDiv',
    style     : 'border: 1px dashed; padding: 5px;',
    children : {
        tag : 'div',
        html : '...a nested div',
        style : 'color: #EE0000; border: 1px solid'
    }
});
myDiv1.insertFirst({
    tag : 'div',
    html : 'Child inserted as node 0 of myDiv1'
});
myDiv1.createChild({
         tag : 'div',
         id   : 'removeMeLater',
         html : 'Child inserted as node 2 of myDiv1'
}, myDiv1.dom.childNodes[3]);

myDiv1.createChild({
    tag       : 'div',
    id        : 'child4',
    children : {
        tag : 'div',
        html : 'nestedChild1'
    }
});

myDiv1.createChild({
    tag       : 'div',
    id        : 'child5',
    html: 'Child 5'
});




























/*
 * don't worry with the following code,
 * just auxiliary functions to show you this source code.
 *
*/
show_code('section 2.2.3','app/views/desktop/ch02_03_create_child.js');
Ext.getCmp('codeview').activate(0);
