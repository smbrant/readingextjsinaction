rwt_app do
  toolbar(:place=>'desktop') do
    menu('Chapter 1') do
      menu_item('Creating helloWorld.js',call_view('/desktop/ch01_02_hello_world'))
    end
    menu('Chapter 2') do
      menu_item('setHeight',call_view('/desktop/ch02_01_set_height'))
      menu_item('setSize',call_view('/desktop/ch02_02_set_size'))
      menu_item('createChild',call_view('/desktop/ch02_03_create_child'))
    end
    menu('Jay Garcia') do
      menu_item('ExtJs in Action',function("window.open('http://www.manning.com/garcia/')"))
      menu_item('TDG-innovations LCC',function("window.open('http://tdg-i.com/')"))
    end
  end
end