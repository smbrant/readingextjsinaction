/*
 * just to clean the codeview panel, letting only the scratch pad
 */
Ext.getCmp('codeview').items.each(function(item,index){if(index>0){item.destroy()}})
