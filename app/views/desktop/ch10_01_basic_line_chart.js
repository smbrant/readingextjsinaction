/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch10" target="_blank">Chapter 10</a>
 * 
 */


var employeeStoreProxy = new Ext.data.ScriptTagProxy({
    url : 'http://extjsinaction.com/getNewHireData.php'
});
var remoteStore = {
    xtype : 'jsonstore',
    root : 'records',
    autoLoad : true,
    storeId : 'employeeDv',
    proxy : employeeStoreProxy,
    fields : [
    {
        name : "year",
        mapping : "year"
    },
    {
        name : "total",
        mapping : "total"
    }
    ]
};
var chart = {
    xtype : 'linechart',
    store : remoteStore,
    xField : 'year',
    yField : 'total',
    tipRenderer : function(chart, record, index, series){
        var yearInfo = "Year: " + record.data.year;
        var empInfo = 'Num. employees: ' + record.data.total;
        return yearInfo + '\n' + empInfo ;
    },
    xAxis: new Ext.chart.CategoryAxis({
        title : 'Year Hired'
    }),
    yAxis: new Ext.chart.NumericAxis({
        title : 'Number of employees'
    }),
    extraStyle : {
        yAxis: {
            titleRotation : -90
        }
    }
};
new Ext.Window({
    width : 400,
    height : 400,
    layout : 'fit',
    items : chart
}).show();



















show_code("section 10.3","app/views/desktop/ch10_01_basic_line_chart.js");
