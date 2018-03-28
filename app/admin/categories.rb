ActiveAdmin.register Category do

permit_params :name, :descricao
menu priority: 3, label: "Categoria"


form do |f|

f.inputs do

f.input :name
f.input :descricao
end

f.actions
end


end
