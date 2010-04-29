rwt_app do
  toolbar do
    menu('Chapter 1') do
      menu_item('Creating helloWorld.js',call_view('/desktop/ch01_02_hello_world'))
    end
    menu('Jay Garcia') do
      menu_item('ExtJs in Action',function("window.open('http://www.manning.com/garcia/')"))
      menu_item('TDG-innovations LCC',function("window.open('http://tdg-i.com/')"))
    end
  end
end