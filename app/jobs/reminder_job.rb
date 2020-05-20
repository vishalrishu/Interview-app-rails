class ReminderJob < ApplicationJob
  queue_as :default

  def perform(interview_id)
    # Do something later
    puts interview_id
    puts "In Reminder job"
    @interview = Interview.find(interview_id)
    @interview.reminder_send
  end
end
