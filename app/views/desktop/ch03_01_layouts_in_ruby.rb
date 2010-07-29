what= "a grand child"

window("Window 1") do
  panel("Child Panel 1",:html=>"Panels can contain Children")
  panel("Child Panel 2") do
    panel('Child 1 of "Child Panel 2"',:html=>"I'm #{what} of Window 1")
  end
end