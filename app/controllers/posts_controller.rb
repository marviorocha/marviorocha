class PostsController < ApplicationController

include ApplicationHelper

def index
site
@post_last = Post.last(3)
@post = Post.first(5)
@message = Message.new
end

def show
site
@post_show = Post.find(params[:id])
@category = Category.find(@post_show.category_id)
end


end
