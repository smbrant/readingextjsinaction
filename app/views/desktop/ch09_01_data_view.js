/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch9" target="_blank">Chapter 9</a>
 * 
 */

var employeeStoreProxy = new Ext.data.ScriptTagProxy({
    url : 'http://extjsinaction.com/getEmployees.php'
});

var employeeDvStore = {
    xtype : 'jsonstore',
    root : 'rows',
    autoLoad : true,
    storeId : 'employeeDv',
    proxy : employeeStoreProxy,
    fields : [
        {name : "datehired", mapping : "datehired"},
        {name : "department", mapping : "department"},
        {name : "email", mapping : "email"},
        {name : "firstname", mapping : "firstname"},
        {name : "id", mapping : "id"},
        {name : "lastname", mapping : "lastname"},
        {name : "middle", mapping : "middle"},
        {name : "title", mapping : "title"}
    ]
};

var employeeDvTpl = new Ext.XTemplate(
    '<tpl for=".">',
        '<div class="emplWrap" id="employee_{id}">',
            '<div class="emplName">{lastname}, {firstname} {title}</div>',
            '<div><span class="title">Department:</span> {department}</div>',
            '<div>',
                '<span class="title">Email:</span><a href="#">{email}</a>',
            '</div>',
        '</div>',
    '</tpl>'
);

var employeeDv = new Ext.DataView({
    tpl : employeeDvTpl,
    store : employeeDvStore,
    singleSelect : true,
    itemSelector : 'div.emplWrap',
    selectedClass : 'emplSelected',
    overClass : 'emplOver',
    style : 'overflow:auto; background-color: #FFFFFF;'
});


new Ext.Window({
    height : 350,
    width : 550,
    border : false,
    layout : 'fit',
    items : [employeeDv]
}).show();

/*

Rwt.tb.hide();
Ext.getCmp('codeview').hide();

var viewport= new Ext.Viewport({
    layout : 'hbox',
    layoutConfig : {
        align : 'stretch'
    },
    items : [
    {
        title : 'Employees',
        frame : true,
        layout : 'fit',
        items : employeeDv
    },
    {
        xtype:'button',
        text:'return',
        handler:function(){
          viewport.destroy();
          Rwt.tb.show();
          Ext.getCmp('codeview').show();
          Ext.getCmp('codeview').doLayout();
        }
    }
    ]
});

*/





show_code("section 9.2","app/views/desktop/ch09_01_data_view.js");
