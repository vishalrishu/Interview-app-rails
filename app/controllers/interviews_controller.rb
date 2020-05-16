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
        redirect_to interview_path(@interview)
    end
    def edit
        @interview = Interview.find(params[:id])
    end
    def update
        @interview = Interview.find(params[:id])
        @interview.update interview_params
        redirect_to interview_path(@interview)
    end
    def destroy
        Interview.find(params[:id]).destroy
        redirect_to root_path
    end
    private
    def interview_params
        params.require(:interview).permit(:description, :startTime, :endTime, :pdf, participant_ids: [])
    end
end
