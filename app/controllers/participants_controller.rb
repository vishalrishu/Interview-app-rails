class ParticipantsController < ApplicationController
  def index
    @participants = Participant.all
  end
  
  def show
    @participant = Participant.find(params[:id])
  end

  def new
    @participant = Participant.new
  end

  def create
    @participant = Participant.create participant_params
    redirect_to participant_path(@participant)
  end

  private

  def participant_params
    params.require(:participant).permit(:name, :email, :address)
  end
end
