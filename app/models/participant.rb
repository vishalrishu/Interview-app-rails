class Participant < ApplicationRecord
    has_many :interview_participants,  dependent: :destroy
    has_many :interviews, :through => :interview_participants
    has_attached_file :pdf
    validates_attachment :pdf, content_type: { content_type: "application/pdf" }, :allow_nil => true
  
end
