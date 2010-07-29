win=new Ext.Window({
    y:100,
    x:100,
    title:'Event tests',
    html: '<div id="myDiv">\n\
            MyDiv Text \n\
            <a href="#" id="myHref">\n\
                My Href\n\
            </a>\n\
        </div>'
});
win.show();

Ext.get('myDiv').on('click',
    function(eventObj, elRef){
        console.log('myDiv click Handler, source elment ID: ' +elRef.id)
        }
    );
Ext.get('myHref').on('click', function(eventObj, elRef) {
    eventObj.stopEvent();
    console.log('myHref click handler, source elment ID: ' + elRef.id);
});

Ext.get('myDiv').on('contextmenu', function(eventObj, elRef) {
    console.log('myDiv contextmenu Handler, source elment ID: ' + elRef.id);
});

Ext.get('myHref').on('contextmenu', function(eventObj, elRef) {
    eventObj.stopEvent();
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
