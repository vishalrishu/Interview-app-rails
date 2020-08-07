class RemoveAttachmentPdfToInterviews < ActiveRecord::Migration[6.0]
  def change
    remove_attachment :interviews, :pdf 
  end
end
