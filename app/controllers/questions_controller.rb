# QuestionsController: manage actions related to questions
class QuestionsController < ApplicationController
  def create
    !authenticate_user(true, true) && return
    @question = Question.new(question_params)
    if @question.save
      render 'question_response', layout: false, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def update
    !authenticate_user(true, true) && return
    @question = Question.find(params[:id]) || (record_not_found && return)
    q_params = question_params
    q_params.except!(:survey_template_id)
    if @question.update(q_params)
      render 'question_response', layout: false, status: :ok
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def destroy
    !authenticate_user(true, true) && return
    @question = Question.find(params[:id])
    if @question.destroy
      render json: @question, status: :ok
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  private

  def question_params
    q_params = params.require(:question).permit(:question_type, :title,
                                                :is_public, :order,
                                                :instruction, :content, :extras,
                                                :survey_template_id)
    q_params[:question_type] = q_params[:question_type].to_i
    q_params
  end
end
