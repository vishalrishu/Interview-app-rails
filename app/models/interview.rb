class Interview < ApplicationRecord
  has_many :interview_participants, dependent: :destroy  
  has_many :participants, :through => :interview_participants

  validate :cannot_overlap_time
  def cannot_overlap_time
    overlaps = Interview.joins("INNER JOIN interview_participants pi ON interviews.id = pi.interview_id")
    .where("pi.participant_id in (?) AND ((interviews.start_time <= ? AND interviews.end_time >= ?) OR (interviews.start_time <= ? AND interviews.end_time >= ?))", participant_ids, self.start_time, self.start_time, self.end_time, self.end_time)
    if overlaps.present? && overlaps.first.id != self.id
      overlap_error
    else
      puts "NO error"
    end
  end
    
  def overlap_error
    errors.add(:overlap_error, 'There is already an event scheduled in this hour!')
  end

end
