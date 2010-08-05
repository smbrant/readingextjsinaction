#
# <a href="http://www.access.net.br/projects/extjsinaction/wiki/Ch3" target="_blank">Chapter 3</a>
#
#

what= "a grand child" # a local ruby variable

window("Window 1") do
  panel("Child Panel 1",:html=>"Panels can contain Children")
  panel("Child Panel 2") do
    panel('Child 1 of "Child Panel 2"',:html=>"I'm #{what} of Window 1")
  end
end





















































show_code("section 3.1","app/views/desktop/ch03_01_layouts_in_ruby.rb")
