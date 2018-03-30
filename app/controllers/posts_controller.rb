class PostsController < ApplicationController

include ApplicationHelper

def index

site
@post = Post.all
@snippet = Snippet.snippet('service')
end

end
