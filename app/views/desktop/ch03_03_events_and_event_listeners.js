/*
 *
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch3" target="_blank">Chapter 3</a>
 *
 * Note: if you don't have firebug installed (or are not using chrome),
 * use Rwt.debug instead of console.log, e.g.
 * ...
 *       Rwt.debug('Hello stranger');
 * ...
 */
win=new Ext.Window({
    title:'Event and Event Listeners',
    items:[
    new Ext.Button({
        text: 'Fire sayHello Event',
        handler: function(){
            myObservable.fireEvent('sayHello');
        }
    }),
    new Ext.Button({
        text: 'Fire sayGoodbye Event',
        handler: function(){
            myObservable.fireEvent('sayGoodbye', 'John', 'Smith');
        }
    })
    ],
    listeners:{close:function(){
            myObservable.un('sayGoodbye', sayGoodbyeFn);
            Rwt.debug('Listeners removed.');
            console.log('Listeners removed.');
    }}
});
win.show();

var myObservable = new Ext.util.Observable();
/*
myObservable.addEvents('sayHello');
myObservable.addEvents('sayGoodbye');
myObservable.addEvents('sayHello', 'sayGoodbye');
*/
myObservable.addEvents({
    'sayHello' : true,
    'sayGoodbye' : true
});
myObservable.on('sayHello', function() {
    Rwt.debug('Hello stranger');
    console.log('Hello stranger');
});
myObservable.fireEvent('sayHello');

var sayGoodbyeFn = function(firstName, lastName) {
    Rwt.debug('Goodbye ' + firstName + ' ' + lastName + '!');
    console.log('Goodbye ' + firstName + ' ' + lastName + '!');
};
myObservable.on('sayGoodbye', sayGoodbyeFn);









show_code("section 3.1.6","app/views/desktop/ch03_03_events_and_event_listeners.js");
