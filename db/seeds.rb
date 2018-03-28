# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'marviorocha@marviorocha.com', password: 'luacho07', password_confirmation: 'luacho07')
Site.create!(title: "Titulo Exemplo", site_descricao:"Colocar aqui a descricao", email: "exemplo@exemplo.com", tel: "(22)99999-9999")
