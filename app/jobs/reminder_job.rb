class ReminderJob < ApplicationJob
  queue_as :default

  def perform(interview_id)
    # Do something later
    puts interview_id
    puts "In Reminder job"
    Interview.send_reminder(interview_id)
  end
end
