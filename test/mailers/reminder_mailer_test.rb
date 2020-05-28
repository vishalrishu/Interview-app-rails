require 'test_helper'

class ReminderMailerTest < ActionMailer::TestCase
  test "set_reminder" do
    mail = ReminderMailer.set_reminder
    assert_equal "Set reminder", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
