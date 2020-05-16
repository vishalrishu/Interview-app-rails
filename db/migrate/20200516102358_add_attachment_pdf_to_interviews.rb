class AddAttachmentPdfToInterviews < ActiveRecord::Migration[6.0]
  def self.up
    change_table :interviews do |t|
      t.attachment :pdf
    end
  end

  def self.down
    remove_attachment :interviews, :pdf
  end
end
