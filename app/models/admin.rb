# Admin: admin modeling
class Admin < ActiveRecord::Base
  include ModelHelper
  validates :user_id, presence: true, uniqueness: {
    scope: :cohort,
    message: 'can only have one admin role for each cohort'
  }
  before_validation :fill_current_cohort

  belongs_to :user

  def self.admin?(user_id, extra = nil)
    if extra
      extra[:user_id] = user_id
      Admin.find_by(extra)
    else
      Admin.find_by(user_id: user_id)
    end
  end
end
