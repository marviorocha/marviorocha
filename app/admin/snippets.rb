ActiveAdmin.register Snippet do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
 menu priority: 4, label: "Sneppets"
 permit_params :name, :code

index do
    selectable_column
    column "Nome", :name
    column "Código", :code do |h|
      truncate(h.code, size: 180, omission: '(mais...)')
    end
    actions
end

show do
  attributes_table do
  row :name
  row :code do |h|
    h.code.html_safe
  end
end
end


form do |f|
		f.inputs do
    f.input :name, label: "Digite o nome"
    f.input :code, as: :trumbowyg  
    end
    f.actions
end

end
