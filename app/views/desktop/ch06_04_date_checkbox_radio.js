/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch6" target="_blank">Chapter 6</a>
 * 
 */


var fp = new Ext.form.FormPanel({
    bodyStyle : 'padding: 6px',
    labelWidth : 126,
    defaultType : 'textfield',
    defaults : {
        msgTarget : 'side',
        anchor : '-20'
    },
    items : [
        {
            xtype : 'datefield',
            fieldLabel : "Please select a date",
            anchor : '100%'
        },
        {
            xtype : 'checkbox',
            fieldLabel : "Which do you own",
            boxLabel : 'Cat',
            inputValue : 'cat'
        },
        {
            xtype : 'checkbox',
            fieldLabel : "",
            labelSeparator : ' ',
            boxLabel : 'Dog',
            inputValue : 'dog'
        },
        {
            xtype : 'checkbox',
            fieldLabel : "",
            labelSeparator : ' ',
            boxLabel : 'Fish',
            inputValue : 'fish'
        },
        {
            xtype : 'checkbox',
            fieldLabel : "",
            labelSeparator : ' ',
            boxLabel : 'Bird',
            inputValue : 'bird'
        },
        {
            xtype : 'checkboxgroup',
            fieldLabel : "Which do you own",
            anchor : '100%',
            items : [
                {
                    boxLabel : 'Cat',
                    inputValue : 'cat'
                },
                {
                    boxLabel : 'Dog',
                    inputValue : 'dog'
                },
                {
                    boxLabel : 'Fish',
                    inputValue : 'fish'
                },
                {
                    boxLabel : 'Bird',
                    inputValue : 'bird'
                }
            ]
        },
        {
            xtype : 'radiogroup',
            fieldLabel : "Which do you own",
            anchor : '100%',
            items : [
                {
                    boxLabel : 'Cat',
                    name: 'animal',
                    inputValue : 'cat'
                },
                {
                    boxLabel : 'Dog',
                    name: 'animal',
                    inputValue : 'dog'
                },
                {
                    boxLabel : 'Fish',
                    name: 'animal',
                    inputValue : 'fish'
                },
                {
                    boxLabel : 'Bird',
                    name: 'animal',
                    inputValue : 'bird'
                }
            ]
        }

    ]
});

        new Ext.Window({
            title : 'Dates, Check boxes, Radio buttons',
            layout: 'fit',
            width : 680,
            height : 230,
            items:fp
        }).show();
















        show_code("sections 6.4 & 6.5","app/views/desktop/ch06_04_date_checkbox_radio.js");
