class DesktopController < ApplicationController
  before_filter :rwt_render, :except=>[:index]
  def index
    respond_to do |format|
      format.html
      format.rwt {rwt_render}
    end
  end

end
