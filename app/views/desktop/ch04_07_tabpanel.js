/*
 * I don't like to use id's. The problem is that if you instantiate the panel or
 * and other component more than once with the same id you start having problems.
 *
 * So, whenever possible, I prefer not to use id's in ext components. Most of
 * the times you can do this, with just a little bit more effort.
 * 
 */

var simpleTab = {
    title: 'My first tab',
    html: 'This is my first tab!',
    buttons:[
    {
        text:'add a new tab',
        handler:function(){
/*            var tPanel = Ext.getCmp('myTPanel');*/
            var tPanel= this.findParentByType('tabpanel'); /* not so difficult */
            tPanel.add({
                title : 'New tab',
                closable: true
            });

        }
    },
    {
        text: 'enable disabled tabs',
        handler:function(){
           tabPanel.items.each(
              function(item){
                  item.enable();
              }
       )
        }
    },
    {
        text: 'hide tab strips',
        handler:function(){
           tabPanel.items.each(
              function(item){
                  tabPanel.hideTabStripItem(item);
              }
           )
        }
    },
    {
        text: 'unhide tab strips',
        handler:function(){
           tabPanel.items.each(
              function(item){
                  tabPanel.unhideTabStripItem(item);
              }
       )
        }
    }
    ]
};
var closableTab = {
    title : 'I am closable',
    html : 'Please close when done reading.',
    closable : true
};

var disabledTab = {
    title : 'Disabled tab',
/*    id : 'disabledTab',*/
    html : 'Peekaboo!',
    disabled : true,
    closable : true
};

var tabPanel = new Ext.TabPanel({
    activeTab : 0,
/*    id : 'myTPanel',*/
    enableTabScroll : true,
    items : [
    simpleTab,
    closableTab,
    disabledTab
    ]
});

new Ext.Window({
    height : 300,
    width : 400,
    layout : 'fit',
    items : tabPanel
}).show();
