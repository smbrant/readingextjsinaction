/*
 * <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch10" target="_blank">Chapter 10</a>
 * 
 */


var remoteProxy = new Ext.data.ScriptTagProxy({
    url : 'http://extjsinaction.com/salaryRanges.php'
});
var pieStore = new Ext.data.JsonStore({
    autoLoad : true,
    proxy : remoteProxy,
    id : 'piestore',
    root : 'records',
    fields : [
    {
        name : "total",
        mapping : "total"
    },
    {
        name : "range",
        mapping : "range"
    }
    ]
});

var tipRenderer = function(chart, record, index, series) {
    var seriesData = record.data;
    var total = 0;
    Ext.each(series.data, function(obj) {
        total += parseInt(obj.total);
    });
    var slicePct = (seriesData.total/total) * 100;
    slicePct = ' (' + slicePct.toFixed(2) + '%)';
    var rangeMsg = 'Salary Range : ' + seriesData.range;
    var empMsg = 'Num Emp. : ' + seriesData.total + slicePct;
    return rangeMsg + '\n' + empMsg;
};

var pieChart = {
    xtype : 'piechart',
    store : pieStore,
    tipRenderer : tipRenderer,
    dataField : 'total',
    categoryField : 'range',
    series : [{
        style : {
            colors : [0xB5FF6B, 0xFFFF6B, 0xFFB56B, 0xFF6B6B]
        }
    }],
    extraStyle : {
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
    }
};
new Ext.Window({
    width : 400,
    height : 250,
    layout : 'fit',
    items : pieChart
}).show();



















show_code("section 10.7","app/views/desktop/ch10_05_pie_chart.js");
