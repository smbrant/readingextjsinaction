/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch9" target="_blank">Chapter 9</a>
 * 
 */

Rwt.tb.hide();
Ext.getCmp('codeview').hide();

    var employeeStoreProxy = new Ext.data.ScriptTagProxy({
        url : 'http://extjsinaction.com/getEmployees.php'
    });

    var employeeDvStore = {
        xtype    : 'jsonstore',
        autoLoad : true,
        storeId  : 'employeeDv',
        root     : 'records',
        proxy    : employeeStoreProxy,
        fields   : [
            { name : "city",       mapping : "city" },
            { name : "datehired",  mapping : "datehired" },
            { name : "department", mapping : "department" },
            { name : "dob",        mapping : "dob" },
            { name : "email",      mapping : "email" },
            { name : "firstname",  mapping : "firstname" },
            { name : "id",         mapping : "id" },
            { name : "lastname",   mapping : "lastname" },
            { name : "middle",     mapping : "middle" },
            { name : "title",      mapping : "title" }
        ]
    };

    var employeeDvTpl = new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="emplWrap" id="employee_{id}">',
                '<div class="emplName">{lastname}, {firstname} {title}</div>',
                '<div><span class="title">Department:</span> {department}</div>',
                '<div><span class="title">Date Hired:</span> {datehired}</div>',
                '<div>',
                    '<span class="title">Email:</span> <a href="#">{email}</a>',
                '</div>',
            '</div>',
         '</tpl>'
    );


    var employeeDv = new Ext.DataView({
        tpl           : employeeDvTpl,
        store         : employeeDvStore,
        singleSelect  : true,
        overClass     : 'emplOver',
        selectedClass : 'emplSelected',
        itemSelector  : 'div.emplWrap',
        emptyText     : 'No records to display',
        autoScroll    : true,
        style         : 'background-color: #FFFFFF;'
    });

    viewport= new Ext.Viewport({
       layout       : 'hbox',
       defaults     : {
           flex : 1
       },
       layoutConfig : {
           align : 'stretch'
       },
       items      : [
           {
               title  : 'Employees',
               frame  : true,
               layout : 'fit',
               items  : [employeeDv]
           },
                               {
                    xtype: 'button',
                    text:'return',
                    handler:function(){
                    Rwt.tb.show();  /* show the toolbar again */
                    Ext.getCmp('codeview').show(); /* and the code view panel */
                    Ext.getCmp('codeview').doLayout();
                }}
       ]
    });

    viewport.show();




show_code("section 9.2","app/views/desktop/ch09_01_data_view.js");
