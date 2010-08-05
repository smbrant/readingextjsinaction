/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch3" target="_blank">Chapter 3</a>
 *
 * Problems here if you instantiates more than one window. Not goot to use id's.
 *
*/

win=new Ext.Window({
    y:100,
    x:100,
    title:'Event tests',
    html: '<div id="myDiv">MyDiv Text<a href="#" id="myHref">My Href</a></div>'
});
win.show();

Ext.get('myDiv').on('click',
    function(eventObj, elRef){
        Rwt.debug('myDiv click Handler, source elment ID: ' +elRef.id);
        console.log('myDiv click Handler, source elment ID: ' +elRef.id);
        }
    );
Ext.get('myHref').on('click', function(eventObj, elRef) {
    eventObj.stopEvent();
    Rwt.debug('myHref click handler, source elment ID: ' + elRef.id);
    console.log('myHref click handler, source elment ID: ' + elRef.id);
});

Ext.get('myDiv').on('contextmenu', function(eventObj, elRef) {
    Rwt.debug('myDiv contextmenu Handler, source elment ID: ' + elRef.id);
    console.log('myDiv contextmenu Handler, source elment ID: ' + elRef.id);
});

Ext.get('myHref').on('contextmenu', function(eventObj, elRef) {
    eventObj.stopEvent();
    Rwt.debug('myHref contextmenu Handler, source elment ID: ' + elRef.id);
    console.log('myHref contextmenu Handler, source elment ID: ' + elRef.id);
    if (!this.ctxMenu) {
        this.ctxMenu = new Ext.menu.Menu({
            items : [{
                text : "This is"
            },{
                text : "our custom"
            },{
                text : "context menu"
            }]
        });
    }
    this.ctxMenu.show(elRef);
});
















show_code("section 3.1","app/views/desktop/ch03_02_events.js");
