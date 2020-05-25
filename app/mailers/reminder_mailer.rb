class ReminderMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.reminder_mailer.set_reminder.subject
  #
  def set_reminder(id)
    @interview = Interview.find(id)
    puts @interview.participant_ids
    @emails = Participant.select("email").where("id in (?)", @interview.participant_ids)
    email_list = []
    for e in @emails do 
      email_list.append(e.email)
    end
    puts email_list
    puts "EMail ids"

    mail to: email_list, subject: "Reminder mail"
  end

  def update_reminder(id)
    @interview = Interview.find(id)
    @emails = Participant.select("email").where("id in (?)", @interview.participant_ids)
    email_list = []
    for e in @emails do 
      email_list.append(e.email)
    end
    mail to: email_list, subject: "Interview Schedule Updated"
  end

  def delete_reminder(id)
    @interview = Interview.find(id)
    @emails = Participant.select("email").where("id in (?)", @interview.participant_ids)
    email_list = []
    for e in @emails do 
      email_list.append(e.email)
    end
    mail to: email_list, subject: "Interview Cancelled"
  end

end
