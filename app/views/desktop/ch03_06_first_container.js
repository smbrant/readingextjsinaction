/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch3" target="_blank">Chapter 3</a>
 *
 */

myWin= null;

var panel1 = {
    html: 'I am Panel1',
    frame: true,
    height: 100,
    buttons:[
    {
        text:'Append a new panel',
        handler:function(){
            myWin.add({
                title : 'Appended Panel',
                type: 'addedPanel',
                html : 'Hello there!'
            });
            myWin.doLayout();
        }
    },
    {
        text:'Insert a new panel after Panel1',
        handler:function(){
            myWin.insert(1,{
                title : 'Inserted Panel',
                type: 'insertedPanel',
                html : 'It is cool here!'
            });
            myWin.doLayout();
        }
    },
    {
        text:'Destroy appended',
        handler:function(){
            myWin.items.each(function(item){
                if (item.type=='addedPanel'){
                    myWin.remove(item);
                }
            })
        }
    },
    {
        text:'Destroy inserted',
        handler:function(){
            myWin.items.each(function(item){
                if (item.type=='insertedPanel'){
                    myWin.remove(item);
                }
            })
        }
    }
    ]
};

var panel2 = {
    html : '<b>I am Panel2</b>',
    frame : true
};

var myWin = new Ext.Window({
    height : 400,
    width : 600,
    items : [
    panel1,
    panel2
    ]
});

myWin.show();






























show_code("section 3.4","app/views/desktop/ch03_06_first_container.js");
