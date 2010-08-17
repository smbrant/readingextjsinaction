/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch6" target="_blank">Chapter 6</a>
 * 
 */

var fieldset1 = {
    xtype : 'fieldset',
    title : 'Name Information',
    flex : 1,
    border : false,
    labelWidth : 60,
    defaultType : 'field',
    defaults : {
        anchor : '-10',
        allowBlank : false
    },
    items : [
    {
        fieldLabel : 'First',
        name : 'firstName'
    },
    {
        fieldLabel : 'Middle',
        name : 'middle'
    },
    {
        fieldLabel : 'Last',
        name : 'lastName'
    }
    ]
};

var fieldset2 = Ext.apply({}, {
    flex : 1,
    title : 'Address Information',
    items : [
    {
        fieldLabel : 'Address',
        name : 'address'
    },
    {
        fieldLabel : 'Street',
        name : 'street'
    },
    {
        xtype : 'container',
        border : false,
        layout : 'column',
        anchor : '100%',
        items : [
        {
            xtype : 'container',
            layout : 'form',
            width : 200,
            items : [
            {
                xtype : 'textfield',
                fieldLabel : 'State',
                name : 'state',
                anchor : '-20'
            }
            ]
        },
        {
            xtype : 'container',
            layout : 'form',
            columnWidth : 1,
            labelWidth : 30,
            items : [
            {
                xtype : 'textfield',
                fieldLabel : 'Zip',
                anchor : '-10',
                name : 'zip'
            }
            ]
        }
        ]
    }
    ]
}, fieldset1);

var fieldsetContainer = {
    xtype : 'container',
    layout : 'hbox',
    height : 120,
    layoutConfig : {
        align : 'stretch'
    },
    items : [
    fieldset1,
    fieldset2
    ]
};

var tabs = [
{
    xtype : 'container',
    title : 'Phone Numbers',
    layout : 'form',
    bodyStyle : 'padding:6px 6px 0',
    defaults : {
        xtype : 'textfield',
        width : 230
    },
    items: [
    {
        fieldLabel : 'Home',
        name : 'home'
    },
    {
        fieldLabel : 'Business',
        name : 'business'
    },
    {
        fieldLabel : 'Mobile',
        name : 'mobile'
    },
    {
        fieldLabel : 'Fax',
        name : 'fax'
    }
    ]
},
{
    title : 'Resume',
    xtype : 'htmleditor',
    name : 'resume'
},
{
    title : 'Bio',
    xtype : 'htmleditor',
    name : 'bio'
}
];

var tabPanel = {
    xtype :'tabpanel',
    activeTab : 0,
    deferredRender : false,
    layoutOnTabChange : true,
    border : false,
    flex : 1,
    plain : true,
    items : tabs
};

var myFormPanel = new Ext.form.FormPanel({
    height : 360,
    frame : true,
    layout : 'vbox',
    layoutConfig : {
        align : 'stretch'
    },
    items : [
    fieldsetContainer,
    tabPanel
    ]
});

var onSuccessOrFail = function(form, action) {
    var formPanel = myFormPanel;
    formPanel.el.unmask();
    var result = action.result;
    if (result.success) {
        Ext.MessageBox.alert('Success',action.result.msg);
    }
    else {
        Ext.MessageBox.alert('Failure',action.result.msg);
    }
};

var submitHandler1 = function() {
    var formPanel = myFormPanel;
    formPanel.el.mask('Please wait', 'x-mask-loading');
    formPanel.getForm().submit({
        url : '/code/bring/public/ch06/success.true.txt',
        success : onSuccessOrFail,
        failure : onSuccessOrFail
    });
};

var submitHandler2 = function() {
    var formPanel = myFormPanel;
    formPanel.el.mask('Please wait', 'x-mask-loading');
    formPanel.getForm().submit({
        url : '/code/bring/public/ch06/success.false.txt',
        success : onSuccessOrFail,
        failure : onSuccessOrFail
    });
};

var loadData = function(){
    var formPanel = myFormPanel;
    formPanel.el.mask('Please wait', 'x-mask-loading');
    formPanel.getForm().load({
        url : '/code/bring/public/ch06/data.txt',
        success : function() { formPanel.el.unmask(); }
    });
};
new Ext.Window({
    title : 'Our complex form',
    layout: 'fit',
    width : 680,
    height : 360,
    items:myFormPanel,
    bbar:[{
        xtype:'button',
        text:'Submit (with success)',
        handler:submitHandler1
    },
    {
        xtype:'button',
        text:'Submit (with error)',
        handler:submitHandler2
    },
    {
        xtype:'button',
        text:'Load',
        handler:loadData
    }
    ]
}).show();
















show_code("sections 6.6","app/views/desktop/ch06_05_form_panel.js");
