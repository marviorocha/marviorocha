class PostsController < ApplicationController

include ApplicationHelper

def index

site
@post_last = Post.last(3)
@post = Post.first(5)

end

end
