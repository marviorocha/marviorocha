ActiveAdmin.register Post do

  menu priority: 2, label: "Conteúdo"
  permit_params :title, :body, :image, :category_id
  actions :all, :except => []

index do
  selectable_column
  column  :image do |foto|
  foto.image? ? image_tag(foto.image.url, height: '60') : content_tag(:span, "Sem image")
  end
  column  "Titulo", :title
  column "Criado em:", :created_at do |date|
    date.created_at.strftime("%d-%m-%Y às %H:%M:%S")
  end

  actions do |post|
    item "Preview".html_safe, post_path(post)
  end
end

show do |t|
	attributes_table do

    row :title do |project|
      best_in_place project, :title, as: :input,  url: [:admin,project]
    end

    row :body
		row :image do
			post.image? ? image_tag(post.image.url, height: '100') : content_tag(:span, "No photo yet")
		end

      # actions :show, :new, :create, :update, :edit

	end
end

	form :html => { :enctype => "multipart/form-data" } do |f|
		f.inputs do
      f.input :title
       f.input :body, as: :ckeditor
			 f.input :category_id, as: :select, collection: Category.all

			f.input :image, hint: f.post.image? ? image_tag(post.image.url, height: '100') : content_tag(:span, "Upload JPG/PNG/GIF image")
		end


		f.actions
	end

end
