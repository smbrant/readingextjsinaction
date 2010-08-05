# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details

  # Helper to show code from this rails application
  def show_code(chapter,source)
    Rwt << "show_code('#{chapter}','#{source}');"  # use the javascript show_code function (see app/views/desktop/index.rb)
  end

  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password
end
