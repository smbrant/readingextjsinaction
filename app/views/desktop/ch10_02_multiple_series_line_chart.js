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
    },
    {
        name : "newHires",
        mapping : "newHires"
    },
    {
        name : "prevHired",
        mapping : "prevHired"
    }
    ]
};

var series = [
{
    yField : 'prevHired',
    displayName : 'Previously Hired',
    style : {
        fillColor : 0xFFAAAA,
        borderColor : 0xAA3333,
        lineColor : 0xAA3333
    }
},
{
    yField : 'total',
    displayName : 'Total',
    style : {
        fillColor : 0xAAAAFF,
        borderColor : 0x3333FF,
        lineColor : 0x3333FF
    }
},
{
    yField : 'newHires',
    displayName : 'New Hires',
    style : {
        fillColor : 0xAAFFAA,
        borderColor : 0x33AA33,
        lineColor : 0x33AA33
    }
}
];

var tipRenderer = function(chart, record, index, series){
    var yearInfo = "Year: " + record.get('year');
    var empInfo = series.displayName + ': '+ record.get(series.yField);
    return yearInfo + '\n' + empInfo ;
};
var extraStyle = {
    xAxis : {
        majorGridLines : {
            color : 0x999999,
            size : 1
        }
    },
    yAxis: {
        titleRotation : -90
    },
    legend : {
        display : "bottom",
        padding : 5,
        spacing : 2,
        font : {
            color : 0x000000,
            family : "Arial",
            size : 12
        },
        border : {
            size : 1,
            color : 0x999999
        }
    }
};

var chart = {
    xtype : 'linechart',
    store : remoteStore,
    xField : 'year',
    tipRenderer : tipRenderer,
    extraStyle : extraStyle,
    series : series,
    xAxis : new Ext.chart.CategoryAxis({
        title : 'Year Hired'
    }),
    yAxis : new Ext.chart.NumericAxis({
        title : 'Number of employees'
    })
};

new Ext.Window({
    width : 400,
    height : 400,
    layout : 'fit',
    items : chart
}).show();



















show_code("section 10.4","app/views/desktop/ch10_02_multiple_series_line_chart.js");
