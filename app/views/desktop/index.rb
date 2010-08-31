rwt_app do
  toolbar(:place=>'desktop') do
    menu_item('|Clear tabs|',call_view('/desktop/ch01_01_clear_code_view'))
    menu('Chapter 1') do
      menu_item('Creating helloWorld.js',call_view('/desktop/ch01_02_hello_world'))

    end
    menu('Chapter 2') do
      menu_item('Show div',call_view('/desktop/ch02_00_show_div'))
      menu_item('Set height',call_view('/desktop/ch02_01_set_height'))
      menu_item('Set size',call_view('/desktop/ch02_02_set_size'))
      menu_item('Create children',call_view('/desktop/ch02_03_create_child'))
      menu_item('Remove children',call_view('/desktop/ch02_04_remove_children'))
      menu_item('Using ajax',call_view('/desktop/ch02_05_using_ajax'))
      menu_item('Using templates',call_view('/desktop/ch02_06_using_templates'))
      menu_item('Advanced templates',call_view('/desktop/ch02_07_advanced_xtemplates'))
      menu_item('Clear div',call_view('/desktop/ch02_98_clear_div'))
      menu_item('Hide div',call_view('/desktop/ch02_99_hide_div'))
    end
    menu('Chapter 3') do
      menu_item('Layouts (in ruby)',call_view('/desktop/ch03_01_layouts_in_ruby'))
      menu_item('Events',call_view('/desktop/ch03_02_events'))
      menu_item('Events and event listeners',call_view('/desktop/ch03_03_events_and_event_listeners'))
      menu_item('Xtypes and Component Manager',call_view('/desktop/ch03_04_xtypes'))
      menu_item('Lazy rendering',call_view('/desktop/ch03_05_lazy_render'))
      menu_item('First container',call_view('/desktop/ch03_06_first_container'))
      menu_item('Viewport container',call_view('/desktop/ch03_07_viewport_container'))
    end
    menu('Chapter 4') do
      menu_item('First panel',call_view('/desktop/ch04_01_first_panel'))
      menu_item('Destroy panel',call_view('/desktop/ch04_02_destroy_things'))
      menu_item('Complex panel',call_view('/desktop/ch04_03_complex_panel'))
      menu_item('Animated window',call_view('/desktop/ch04_04_animated_window'))
      menu_item('Rigid modal window',call_view('/desktop/ch04_05_rigid_modal_window'))
      menu('MessageBox') do
        menu_item('Basic',call_view('/desktop/ch04_06_messagebox'))
        menu_item('Advanced 1',call_view('/desktop/ch04_06_messagebox_1'))
        menu_item('Advanced 2',call_view('/desktop/ch04_06_messagebox_2'))
        menu_item('Wait...',call_view('/desktop/ch04_06_messagebox_wait'))
        menu_item('Progress bar',call_view('/desktop/ch04_06_messagebox_wait_2'))
      end
      menu('TabPanel') do
        menu_item('First one',call_view('/desktop/ch04_07_tabpanel'))
        menu_item('Scrollable tabs',call_view('/desktop/ch04_08_scrollable_tabs'))
      end
    end
    menu('Chapter 5') do
      menu_item('Container layout',call_view('/desktop/ch05_01_container_layout'))
      menu_item('Anchor layout',call_view('/desktop/ch05_02_anchor_layout'))
      menu_item('Anchor layout 2',call_view('/desktop/ch05_02_anchor_layout_1'))
      menu_item('Form layout',call_view('/desktop/ch05_03_form_layout'))
      menu_item('Absolute layout',call_view('/desktop/ch05_04_absolute_layout'))
      menu_item('Fit layout',call_view('/desktop/ch05_05_fit_layout'))
      menu_item('Accordion layout',call_view('/desktop/ch05_06_accordion_layout'))
      menu_item('Card layout',call_view('/desktop/ch05_07_card_layout'))
      menu_item('Column layout',call_view('/desktop/ch05_08_column_layout'))
      menu_item('HBox layout',call_view('/desktop/ch05_09_hbox_layout'))
      menu_item('Table layout',call_view('/desktop/ch05_10_table_layout'))
      menu_item('Border layout',call_view('/desktop/ch05_11_border_layout'))
    end
    menu('Chapter 6') do
      menu_item('Text fields',call_view('/desktop/ch06_01_text_fields'))
      menu_item('ComboBox fields ',call_view('/desktop/ch06_02_combo_boxes'))
      menu_item('Html editor ',call_view('/desktop/ch06_03_html_editor'))
      menu_item('Dates, checkboxes, radios ',call_view('/desktop/ch06_04_date_checkbox_radio'))
      menu_item('FormPanel ',call_view('/desktop/ch06_05_form_panel'))
    end
    menu('Chapter 7') do
      menu_item('GridPanel',call_view('/desktop/ch07_01_grid_panel'))
      menu_item('Advanced GridPanel',call_view('/desktop/ch07_02_adv_grid_panel'))
    end
    menu('Chapter 8') do
      menu_item('EditorGridPanel',call_view('/desktop/ch08_01_editor_grid_panel'))
      menu_item('EditorGridPanel CRUD',call_view('/desktop/ch08_02_editor_grid_crud'))
      menu_item('EditorGridPanel CRUD, data writer',call_view('/desktop/ch08_03_editor_grid_data_writer'))
    end
    menu('Jay Garcia') do
      menu_item('ExtJs in Action',function("window.open('http://www.manning.com/garcia/')"))
      menu_item('TDG-innovations LCC',function("window.open('http://tdg-i.com/')"))
    end
    menu('Sergio Brant') do
      menu_item('Github',function("window.open('http://github.com/smbrant')"))
      menu_item('Access Consultoria Ltda',function("window.open('http://www.access.net.br/')"))
    end
  end

  tabpanel( :renderTo=>'code-view',
            :resizeTabs=>true,
            :enableTabScroll=>true,
            :id=>'codeview',
            :activeTab=>0,
            :width=>'auto',
#            :minTabWidth=>150,
            :tabWidth=>100,
#            :autoHeight=>true,
#            :height=>'auto',
            :height=>800,
            :border=>false,
            :plain=>true,
            :hidden=>false,
            :defaults=>{:autoScroll=>true},
            :items=>[{:title=>'Scratch pad',
                :closable=>false,
                :autoLoad=>{:url=>"/scratch_pad.html"}
              }]
  )


# title= code.split('/').last

  Rwt << "function show_code(chapter,source){"
  Rwt <<   "var cv=Ext.getCmp('codeview');"
  Rwt <<   "var n=cv.items.length;"
  Rwt <<   "var rs=cv.items;"
  Rwt <<   "var found=false;"
  Rwt <<   "for(i=0;i<n;++i) {if(rs.items[i].code==source){found=true}};"
#  Rwt <<   "if(!found){Ext.getCmp('codeview').add({title:'#{title}',code:'#{source}',closable:true,autoLoad:{url:'/code/show/#{source}'}}).show();}"
  Rwt <<   "if(!found){Ext.getCmp('codeview').add({title:chapter,tabTip:source,code:source,closable:true,autoLoad:{url:'/code/show/'+source}}).show();}"
  Rwt << "};"
end