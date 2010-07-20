/* 
 */

Ext.get('div1').dom.innerHTML=''; /* start with a clean div */

var tplData = [{ /* 1 */
    color : "#FFE9E9",
    name : 'Naomi White II',
    age
    : 25,
    dob
    : '03/17/84',
    cars : ['Jetta', 'Camry', 'S2000']
},{
    color : "#E9E9FF",
    name : 'John Smith II',
    age : 20,
    dob : '10/20/89',
    cars : ['Civic', 'Accord', 'Camry']
}];

var myTpl = new Ext.XTemplate(
    '<tpl for=".">',
        '<div style="background-color: {color}; margin: 10px;">',
            '<b> Name :</b> {name}<br />',
            '<b> Age :</b> {age}<br />',
            '<b> DOB :</b> {dob}<br />',
            '<b> Cars : </b>',
            '<tpl for="cars">',                             /* 1 */
                '{.}',                                      /* 2 */
                '<tpl if="this.isCamry(values)">',          /* 3 */
                    '<b> (same car)</b>',
                '</tpl>',
                '{[ (xindex < xcount) ? ", " : "" ]}',      /* 4 */
            '</tpl>',
            '<br />',
        '</div>',
    '</tpl>',
    {                                                       /* 5 */
        isCamry : function(car) {
            return car === 'Camry';
        }
    }
);
myTpl.compile();
myTpl.append(Ext.get('div1'), tplData);

