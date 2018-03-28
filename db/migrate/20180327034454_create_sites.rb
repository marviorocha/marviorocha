class CreateSites < ActiveRecord::Migration[5.1]
  def change
    create_table :sites do |t|
      t.string :title
      t.string :site_descricao
      t.string :footer
      t.string :address
      t.string :tel
      t.string :email
      t.string :analityc

      t.timestamps
    end
  end
end
