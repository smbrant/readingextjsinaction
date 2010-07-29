/* 
 * Changed a bit to use div1 instead document.body
 */

Ext.get('div1').dom.innerHTML=''; /* start with a clean div */

var myTpl = new Ext.Template("<div>Hello {0}.</div>");
myTpl.append(Ext.get('div1'), ['Marjan']);
myTpl.append(Ext.get('div1'), ['Michael']);
myTpl.append(Ext.get('div1'), ['Sebastian']);

var myTpl2 = new Ext.Template( /* 1 */
    '<div style="background-color: {color}; margin: 10px;">',
    '<b> Name :</b> {name}<br />',
    '<b> Age :</b> {age}<br />',
    '<b> DOB :</b> {dob}<br />',
    '</div>'
    );
myTpl2.compile();               /* 2 */
myTpl2.append(Ext.get('div1'),{   /* 3 */
    color : "#E9E9FF",
    name  : 'John Smith',
    age   : 20,
    dob   : '10/20/89'
});
myTpl2.append(Ext.get('div1'),{
    color : "#FFE9E9",
    name  : 'Naomi White',
    age   : 25,
    dob   : '03/17/84'
});

/* Using XTemplates */
var tplData = [{ /* 1 */
    color : "#FFE9E9",
    name : 'Naomi White II',
    age
    : 25,
    dob
    : '03/17/84',
    cars : ['Jetta', 'Camry', 'S2000']
},{
    color : "#E9E9FF",
    name : 'John Smith II',
    age : 20,
    dob : '10/20/89',
    cars : ['Civic', 'Accord', 'Camry']
}];
var myTpl3 = new Ext.XTemplate( /* 2 */
    '<tpl for=".">', /* 3 */
    '<div style="background-color: {color}; margin: 10px;">',
    '<b> Name :</b> {name}<br />',
    '<b> Age :</b> {age}<br />',
    '<b> DOB :</b> {dob}<br />',
    '</div>',
    '</tpl>'
    );
myTpl3.compile();
myTpl3.append(Ext.get('div1'), tplData);
