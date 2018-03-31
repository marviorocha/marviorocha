source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# My Gem

gem 'devise'
gem 'activeadmin'
gem 'active_skin'
gem "paperclip"
gem "font-awesome-rails"
gem 'ckeditor', github: 'galetahub/ckeditor'

gem 'jquery-rails'
gem 'best_in_place'
gem 'rails', '~> 5.1.6'

gem 'puma', '~> 3.7'

gem 'sass-rails', '~> 5.0'

gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'

gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'sqlite3'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'


  gem "capistrano", "~> 3.10", require: false
  gem "capistrano-rails", "~> 1.3", require: false
  gem 'capistrano3-puma', require: false
  gem 'capistrano-rvm', require: false
  gem 'capistrano-passenger', '~> 0.2.0'
  gem 'capistrano-bundler'
end

group :production do

gem 'pg'


end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
