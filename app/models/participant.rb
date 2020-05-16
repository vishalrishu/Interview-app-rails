class Participant < ApplicationRecord
    has_many :interview_participants
    has_many :interviews, :through => :interview_participants
    
end
