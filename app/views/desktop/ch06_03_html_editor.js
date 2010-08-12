/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch6" target="_blank">Chapter 6</a>
 * 
 */

var htmlEditor = {
    xtype : 'htmleditor',
    fieldLabel : "Enter in any text",
    anchor : '100% 100%',
    validateValue : function() {
            var val = this.getRawValue();
            return (this.allowBlank ||
            (val.length > 0 && val != '<br>')) ? true : false;
        }
/*    enableFontSize : false,
    enableFont : false */
};

var fp = new Ext.form.FormPanel({
    bodyStyle : 'padding: 6px',
    labelWidth : 126,
    defaultType : 'textfield',
    defaults : {
        msgTarget : 'side',
        anchor : '-20'
    },
    items : [htmlEditor]
});

new Ext.Window({
    title : 'Exercising the html editor',
    layout: 'fit',
    width : 680,
    height : 330,
    items:fp
}).show();
















show_code("section 6.3","app/views/desktop/ch06_03_html_editor.js");
