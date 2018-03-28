class AddAttachmentLogoToSites < ActiveRecord::Migration[5.1]
  def self.up
    change_table :sites do |t|
      t.attachment :logo
    end
  end

  def self.down
    remove_attachment :sites, :logo
  end
end
