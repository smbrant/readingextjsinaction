rwt_app do
  toolbar(:place=>'desktop') do
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
    menu('Jay Garcia') do
      menu_item('ExtJs in Action',function("window.open('http://www.manning.com/garcia/')"))
      menu_item('TDG-innovations LCC',function("window.open('http://tdg-i.com/')"))
    end
    menu('Sergio Brant') do
      menu_item('Github',function("window.open('http://github.com/smbrant')"))
      menu_item('Access Consultoria Ltda',function("window.open('http://www.access.net.br/')"))
    end
  end
end