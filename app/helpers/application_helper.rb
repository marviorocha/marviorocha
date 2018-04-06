module ApplicationHelper

def site
@site = Site.find(1)
end


def snip(name)

@show = Snippet.find_by_name!(name)rescue nil

raw @show.code rescue nil

end


end
