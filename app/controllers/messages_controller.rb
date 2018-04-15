class MessagesController < ApplicationController
include ApplicationHelper
def index
  site
  @message = Message.new(params[:message])
end

def create
  @message =  Message.new(params[:message])
  @message.request = request
respond_to do |format|
  @errorMessage = []
  if @message.deliver
  @message = Message.new
  format.html { render 'index'}
  format.js { flash.now[:success] = @message = "Thank you for your message. I'll get back to you soon!"  }
  else
  format.html { render 'index' }
    format.js   { flash.now[:error] = @message = "Não foi possível enviar... Tente Novamente! - Message did'not send. Please send again!" }
  end
end


end




end
