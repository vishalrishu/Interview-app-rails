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
            ReminderJob.set(wait: 1.minutes).perform_later(@interview.id)
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
        if @interview.id?
            ReminderMailer.set_reminder(@interview).deliver_now
            redirect_to interview_path(@interview)
        end
        
    end
    def destroy
        Interview.find(params[:id]).destroy
        redirect_to root_path
    end
    private
    def interview_params
        params.require(:interview).permit(:description, :start_time, :end_time, :pdf, participant_ids: [])
    end
end
