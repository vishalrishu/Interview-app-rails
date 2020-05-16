class Interview < ApplicationRecord
    has_many :interview_participants
    has_many :participants, :through => :interview_participants
    
    has_attached_file :pdf
    validates_attachment :pdf, content_type: { content_type: "application/pdf" }
end
