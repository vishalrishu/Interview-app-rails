class InterviewsController < ApplicationController
  def index
    @interviews = Interview.all
  end

  def home
    @interviews = Interview.all
    render json: @interviews
  end

  def show
    @interview = Interview.find(params[:id])
  end

  def new
    @interview = Interview.new
  end

  def create

    @interview = Interview.create interview_params
    if @interview.save()
      render json: {
        :success => true,
      }
    else
      render json: {
        :success => false
      }
    end
    # if @interview.id?
    #     ReminderJob.set(wait_until: (@interview.start_time - 30.minutes)).perform_later(@interview.id, @interview.start_time)
    #     redirect_to interview_path(@interview)
    # else
    #     redirect_to new_interview_path, alert: "An Interview already exists with given participants"
    # end
  end

  def edit
    @interview = Interview.find(params[:id])
  end

  def update
    @interview = Interview.find(params[:id])
    start_time = @interview.start_time
    @interview.update interview_params
    puts @interview.updated_at
    if @interview.id?
      # ReminderMailer.update_reminder(@interview.id).deliver_now
      puts start_time
      puts interview_params
      puts @interview.start_time
      puts "Parameter Time"
      # if @interview.start_time.to_i != start_time.to_i
      #   ReminderJob.set(wait_until: (@interview.start_time - 30.minutes)).perform_later(@interview.id, @interview.start_time)
      # end
      redirect_to interview_path(@interview)
    end    
  end
  
  def destroy
    @interview = Interview.find(params[:id])
    # ReminderMailer.delete_reminder(@interview.id).deliver_now
    @interview.destroy
    render json: {
      :success => true,
    }
    # redirect_to root_path
  end
  private

  def interview_params
    params.require(:interview).permit(:description, :start_time, :end_time, participant_ids: [])
  end
end
