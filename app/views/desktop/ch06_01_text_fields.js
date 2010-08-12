/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch6" target="_blank">Chapter 6</a>
 * 
 */

Ext.QuickTips.init();
var fpItems =[
    {
        fieldLabel : 'Alpha only',
        allowBlank : false,
        emptyText : 'This field is empty!',
        maskRe : /[a-z]/i
    },
    {
        fieldLabel : 'Simple 3 to 7 Chars',
        allowBlank : false,
        minLength : 3,
        maxLength : 7
    },
    {
        fieldLabel : 'Special Chars Only',
        stripCharsRe : /[a-z0-9]/ig
    },
    {
        fieldLabel : 'Web Only with VType',
        vtype : 'urlOnly'
    },
    {
        fieldLabel : 'Password',
        allowBlank : false,
        inputType : 'password'
    },
    {
        fieldLabel : 'File',
        allowBlank : false,
        inputType : 'file'
    },
    {
        xtype : 'textarea',
        fieldLabel : 'My TextArea',
        name : 'myTextArea',
        /*        anchor : '100%',*/
        height : 100
    },
    {
        xtype : 'numberfield',
        fieldLabel : 'Numbers only',
        allowBlank : false,
        emptyText : 'This field is empty!',
        decimalPrecision : 3,
        minValue : 0.001,
        maxValue : 2
    },
    {
        xtype : 'timefield',
        fieldLabel : "Please select time",
        minValue : '09:00',
        maxValue : '18:00',
        increment : 30,
        format : 'H:i'
    }
];

var myValidFn = function(v) {
    var myRegex = /https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?/;
    return myRegex.test(v);
};
Ext.apply(Ext.form.VTypes, {
    urlOnly : myValidFn,
    urlOnlyText : 'Must a valid web url'
});

var fp = new Ext.form.FormPanel({
    bodyStyle : 'padding: 6px',
    labelWidth : 126,
    defaultType : 'textfield',
    defaults : {
        msgTarget : 'side',
        anchor : '-20'
    },
    items : fpItems,
    fileUpload : true /* if you use inputType: 'file' */
});

new Ext.Window({
    title : 'Exercising textfields',
    layout: 'fit',
    width : 500,
    height : 350,
    items:fp
}).show();
















show_code("section 6.1","app/views/desktop/ch06_01_text_fields.js");
