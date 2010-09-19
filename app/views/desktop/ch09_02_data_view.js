/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch9" target="_blank">Chapter 9</a>
 * 
 */

/* just to clean the window: */
Rwt.tb.hide();
Ext.getCmp('codeview').hide();

    /* Original example: */
    var employeeStoreProxy = new Ext.data.ScriptTagProxy({
        url : 'http://extjsinaction.com/getEmployees.php'
    });

    var employeeDvStore = new Ext.data.JsonStore({
        xtype    : 'jsonstore',
        root     : 'records',
        storeId  : 'employeeDv',
        proxy    : employeeStoreProxy,
        fields   : [
            {name : "datehired",     mapping : "datehired"},
            {name : "department",    mapping : "department"},
            {name : "email",         mapping : "email"},
            {name : "firstname",     mapping : "firstname"},
            {name : "id",            mapping : "id"},
            {name : "lastname",      mapping : "lastname"},
            {name : "middle",        mapping : "middle"},
            {name : "title",         mapping : "title"}
        ]
    });

    var employeeDvTpl = new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="emplWrap" id="employee_{id}">',
                '<div class="emplName">{lastname}, {firstname} {title}</div>',
                '<div><span class="title">Department:</span> {department}</div>',
                '<div><span class="title">Date Hired:</span> {datehired}</div>',
                '<div><span class="title">Email:</span> <a href="#">{email}</a></div>',
            '</div>',
         '</tpl>'
    );

    var updateForm = new Ext.form.FormPanel({
        frame       : true,
        /* id          : 'updateform', */
        labelWidth  : 70,
        /*xtype       : 'form',*/
        defaultType : 'textfield',
        buttonAlign : 'center',
        title       : 'Update Employee Data',
        labelAlign  : 'top',
        defaults    : {
            anchor : "-5"
        },
        items       : [
            {
                name       : 'lastname',
                fieldLabel : 'Last Name'
            },
            {
                name       : 'firstname',
                fieldLabel : 'First Name'
            },
            {
                name       : 'title',
                fieldLabel : 'Title'
            },
            {
                name       : 'department',
                fieldLabel : 'Department',
                disabled   : true
            },
            {
                xtype      : 'datefield',
                name       : 'datehired',
                fieldLabel : 'Date Hired'
            },
            {
                name       : 'email',
                fieldLabel : 'Email'
            }
        ],
        buttons : [
            {
                text    : 'Save',
                handler : function() {
                    /* Ext.getCmp('updateform'); */
    /*                var formPanel = Ext.findParentByType('form');*/
                    var formPanel= updateForm;
                    if (formPanel.selectedRecord) {
                        var vals  = formPanel.getForm().getValues();;

                        for (var valName in vals) {
                            formPanel.selectedRecord.set(valName, vals[valName]);
                        }
                        formPanel.selectedRecord.commit();
                    }
                }
            },
                        {
                text:'return',
                handler:function(){
                    Rwt.tb.show();  /* show the toolbar again */
                    Ext.getCmp('codeview').show(); /* and the code view panel */
                    Ext.getCmp('codeview').doLayout();
                }
            }

        ]
    });

    var employeeDv = new Ext.DataView({
        tpl           : employeeDvTpl,
        store         : employeeDvStore,
        singleSelect  : true,
        overClass     : 'emplOver',
        selectedClass : 'emplSelected',
        itemSelector  : 'div.emplWrap',
        emptyText     : 'No images to display',
        style         : 'background-color: #FFFFFF;',
        autoScroll    : true,
        listeners     : {
            click : function(thisDv, index) {
                var record = thisDv.store.getAt(index);
                var formPanel = updateForm; /* Ext.getCmp('updateform'); */
                formPanel.selectedRecord = record;
                formPanel.getForm().loadRecord(record);
            }
        }
    });

    var listViewStore = new Ext.data.ScriptTagProxy({
        url : "http://extjsinaction.com/getDepartments.php"
    });

    var departmentLvStore = {
        xtype    : 'jsonstore',
        root     : 'records',
        autoLoad : true,
        storeId  : 'departmentDv',
        proxy    : listViewStore,
        fields   : [
            {name : "department",   mapping : "department"},
            {name : "numEmployees", mapping : "numEmployees"}
        ]
    };

    var departmentLV = new Ext.ListView({
        store         : departmentLvStore,
        singleSelect  : true,
        style         : 'background-color: #FFFFFF;',
        columns       : [
            {
                header    : 'Department Name',
                dataIndex : 'department'
            },
            {
                header    : '# Emp',
                dataIndex : 'numEmployees',
                width     : .20
            }
        ],
        listeners : {
            click : function(thisView, index) {
                var record = thisView.store.getAt(index);
                if (record) {
                    employeeDvStore.load({
                        params : {
                            department : record.get('department')
                        }
/*
                    Ext.StoreMgr.get('employeeDv').load({
                        params : {
                            department : record.get('department')
                        }
                            */
                    });
                    var formPanel = updateForm; /*Ext.getCmp('updateform');*/
                    delete formPanel.selectedRecord;
                    formPanel.getForm().reset();
                }
            }
        }
    });



 viewport=  new Ext.Viewport({
        layout       : 'hbox',
        border       : false,
        layoutConfig : {
            align : 'stretch'
        },
        defaults      : {
            flex : 1
        },
        items         :  [
            {
                title  : 'All Departments',
                frame  : true,
                layout : 'fit',
                items  : departmentLV,
                flex   : null,
                width  : 210
            },
            {
                title  : 'Employees',
                frame  : true,
                layout : 'fit',
                items  : employeeDv,
                flex   : 1
            },
            updateForm
        ]
   });

   viewport.show();




show_code("section 9.3","app/views/desktop/ch09_02_data_view.js");
