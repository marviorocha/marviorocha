class PostsController < ApplicationController

include ApplicationHelper

def index

site
@post = Post.all
 
end

end
