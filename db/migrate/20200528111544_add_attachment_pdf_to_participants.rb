class AddAttachmentPdfToParticipants < ActiveRecord::Migration[6.0]
  def self.up
    change_table :participants do |t|
      t.attachment :pdf
    end
  end

  def self.down
    remove_attachment :participants, :pdf
  end
end
