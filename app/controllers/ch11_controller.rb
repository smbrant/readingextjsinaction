require 'net/http'
require 'uri'
require 'json'

class Ch11Controller < ApplicationController
  def dynamic_tree
    puts params[:node].class
    if params[:node] == 'myCompany'
      resp= Net::HTTP.get_response(URI.parse('http://extjsinaction.com/getDepartments.php'))
      jsonResponse= JSON.parse(resp.body)

      newResponse= []
      jsonResponse.each() do |dept|
        newResponse << {:id=>dept["department"], :text=>dept["department"]}
      end
    else
      resp= Net::HTTP.get_response(URI.parse("http://extjsinaction.com/getEmployees.php?department=#{CGI::escape(params[:node])}"))
      jsonResponse= JSON.parse(resp.body)

      newResponse= []
      jsonResponse.each() do |emp|
        newResponse << {:id=>emp["id"], :text=>"#{emp['firstname']} #{emp['middle']} #{emp['lastname']}", :leaf=>true}
      end
    end

    render :text=> JSON.generate(newResponse)
  end

end
