class ReminderJob < ApplicationJob
  queue_as :default

  def perform(interview_id, start_time)
    @interview = Interview.find(interview_id)
    if @interview.id?
      if @interview.start_time.to_i == start_time.to_i  
        ReminderMailer.set_reminder(interview_id)
      else
        puts "Updated, older mail, We don't need to send this mail now."
      end
    else  
      puts "Interview deleted or doesn't exist"
    end
  end
  
end
