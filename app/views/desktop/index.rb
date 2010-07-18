rwt_app do
  toolbar(:place=>'desktop') do
    menu('Chapter 1') do
      menu_item('Creating helloWorld.js',call_view('/desktop/ch01_02_hello_world'))
    end
    menu('Chapter 2') do
      menu_item('Show div',call_view('/desktop/ch02_00_show_div'))
      menu_item('setHeight',call_view('/desktop/ch02_01_set_height'))
      menu_item('setSize',call_view('/desktop/ch02_02_set_size'))
      menu_item('createChild',call_view('/desktop/ch02_03_create_child'))
      menu_item('Clear div',call_view('/desktop/ch02_98_clear_div'))
      menu_item('Hide div',call_view('/desktop/ch02_99_hide_div'))
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