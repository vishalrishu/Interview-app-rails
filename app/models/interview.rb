class Interview < ApplicationRecord
  has_many :interview_participants, dependent: :delete_all  
  has_many :participants, :through => :interview_participants

  has_attached_file :pdf
  validates_attachment :pdf, content_type: { content_type: "application/pdf" }
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

  def self.send_reminder(id)
  #  puts id
  # puts "In Interview Model"
    ReminderMailer.set_reminder(id).deliver_now
  end
end
