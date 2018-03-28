class Snippet < ApplicationRecord

scope :snippet, ->(name) { find_by("name = ?", name)}

end
