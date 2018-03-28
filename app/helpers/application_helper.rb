module ApplicationHelper

def site
@site = Site.find(1)
end

def snip(name)

Snippet.snippet(name)

end


end
