ActiveAdmin.register Site do

permit_params :title, :site_descricao, :tel, :address, :analityc, :footer, :logo, :email
actions :all, :except => [:destroy, :new]
index download_links: false


menu parent: "Blog"
menu priority: 5, label: "Configuração", url: "/admin/sites/1"


show do

attributes_table do
    row :title,  label: 'Titulo do site:'
    row :site_descricao
    row :email
    row :tel, as: :phone, label: "Telefone"
    row :address, label: 'Endereço:'
    row :image do
      site.logo? ? image_tag(site.logo.url, height: '150') : content_tag(:span, "Sem Imagem")
    end
end
end

form :html => { :enctype => "multipart/form-data" } do |f|
f.inputs do
f.input :title,  label: 'Titulo do site:'
f.input :logo, hint: f.site.logo? ? image_tag(site.logo.url, height: '100') : content_tag(:span, "Upload JPG/PNG/GIF image")
f.input :email, label: 'Email:'
f.input :site_descricao,  label: 'Descrição:', input_html: { maxlength: 180 }
f.input :tel, as: :phone, label: 'Telefone:'
f.input :address, label: 'Endereço:'
f.input :analityc, as: :text
f.input :footer

end
f.actions
end


# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
