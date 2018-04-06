module GravatarHelper

def gravatar(email_addres, size)
  # include MD5 gem, should be part of standard ruby install
require 'digest/md5'

# get the email from URL-parameters or what have you and make lowercase

image_size = size
# create the md5 hash
hash = Digest::MD5.hexdigest(email_addres.downcase)

# compile URL which can be used in <img src="RIGHT_HERE"...
image_src = "https://www.gravatar.com/avatar/#{hash}?s=#{image_size}"
end

end
