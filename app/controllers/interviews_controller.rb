class InterviewsController < ApplicationController
  def index
    @interviews = Interview.all
  end

  def show
    @interview = Interview.find(params[:id])
  end

  def new
    @interview = Interview.new
  end

  def create
    @interview = Interview.create interview_params
    if @interview.id?
        ReminderJob.set(wait_until: (@interview.start_time - 30.minutes)).perform_later(@interview.id, @interview.updated_at)
        redirect_to interview_path(@interview)
    else
        redirect_to new_interview_path, alert: "An Interview already exists with given participants"
    end
  end

  def edit
    @interview = Interview.find(params[:id])
  end

  def update
    @interview = Interview.find(params[:id])
    @interview.update interview_params
    puts @interview.updated_at
    if @interview.id?
      ReminderMailer.update_reminder(@interview.id).deliver_now
      ReminderJob.set(wait_until: (@interview.start_time - 30.minutes)).perform_later(@interview.id, @interview.updated_at)
      redirect_to interview_path(@interview)
    end    
  end
  
  def destroy
    @interview = Interview.find(params[:id])
    ReminderMailer.delete_reminder(@interview.id).deliver_now
    @interview.destroy
    redirect_to root_path
  end
  private

  def interview_params
    params.require(:interview).permit(:description, :start_time, :end_time, participant_ids: [])
  end
end
