class ParticipantsController < ApplicationController
  def index
    @participants = Participant.all
    render json: @participants
  end
  
  def show
    @participant = Participant.find(params[:id])
  end

  def new
    @participant = Participant.new
  end

  def create
    # puts "Parameters"
    # puts participant_params
    @participant = Participant.create participant_params
    
    redirect_to participant_path(@participant)
  end

  def destroy
    @participant = Participant.find(params[:id])
    @participant.destroy
    redirect_to participants_path
  end

  private

  def participant_params
    params.require(:participant).permit(:name, :email, :address, :pdf, :role)
  end
end
