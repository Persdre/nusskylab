require 'rails_helper'

RSpec.describe FacilitatorsController, type: :controller do
  describe 'GET #index' do
    context 'user not logged in' do
      it 'should redirect to root_path for non_user' do
        get :index
        expect(response).to redirect_to(root_path)
      end
    end

    context 'user logged in but not admin' do
      login_user
      it 'should redirect to home_path for non_admin' do
        get :index
        expect(response).to redirect_to(controller.home_path)
      end
    end

    context 'user logged in and admin' do
      login_admin
      it 'should assign @facilitators' do
        get :index
        expect(assigns(:roles).length).to eql Facilitator.all.length
      end

      it 'should render index for admin user' do
        get :index
        expect(response).to render_template(:index)
      end
    end
  end

  describe 'GET #new' do
    context 'user not logged in' do
      it 'should redirect to root_path for non_user' do
        get :new
        expect(response).to redirect_to(root_path)
      end
    end

    context 'user logged in but not admin' do
      login_user
      it 'should redirect to home_path for non_admin' do
        get :new
        expect(response).to redirect_to(controller.home_path)
      end
    end

    context 'user logged in and admin' do
      login_admin
      it 'should render new for admin user' do
        get :new
        expect(response).to render_template(:new)
      end
    end
  end

  describe 'POST #create' do
    context 'user not logged in' do
      it 'should redirect to root_path for non_user' do
        post :create
        expect(response).to redirect_to(root_path)
      end
    end

    context 'user logged in but not admin' do
      login_user
      it 'should redirect to home_path for non_admin' do
        post :create
        expect(response).to redirect_to(controller.home_path)
      end
    end

    context 'user logged in and admin' do
      login_admin
      it 'should redirect to facilitators with success for admin user' do
        user = FactoryGirl.create(
          :user,
          email: '1@facilitator.controller.spec',
          uid: '1.facilitator.controller.spec'
        )
        post :create, facilitator: { user_id: user.id }
        expect(response).to redirect_to(
          facilitators_path(cohort: controller.current_cohort)
        )
        expect(flash[:success]).not_to be_nil
      end

      it 'should redirect to admins with danger for admin user' do
        FactoryGirl.create(
          :facilitator,
          user_id: controller.current_user.id,
          cohort: controller.current_cohort
        )
        post :create, facilitator: { user_id: controller.current_user.id }
        expect(response).to redirect_to(
          new_facilitator_path(cohort: controller.current_cohort)
        )
        expect(flash[:danger]).not_to be_nil
      end
    end
  end

  describe 'GET #show' do
    context 'user not logged in' do
      it 'should redirect to root_path for non_user' do
        user = FactoryGirl.create(:user, email: '2@facilitator.controller.spec', uid: '2.facilitator.controller.spec')
        facilitator = FactoryGirl.create(:facilitator, user_id: user.id)
        get :show, id: facilitator.id
        expect(response).to redirect_to(root_path)
      end
    end

    context 'user logged in but not admin' do
      login_user
      it 'should render show for current facilitator' do
        facilitator = FactoryGirl.create(:facilitator, user_id: controller.current_user.id)
        get :show, id: facilitator.id
        expect(response).to render_template(:show)
        Facilitator.find_by(user_id: controller.current_user.id).destroy
      end

      it 'should redirect to home_path for non_admin' do
        user = FactoryGirl.create(:user, email: '2@facilitator.controller.spec', uid: '2.facilitator.controller.spec')
        facilitator = FactoryGirl.create(:facilitator, user_id: user.id)
        get :show, id: facilitator.id
        expect(response).to redirect_to(controller.home_path)
      end
    end

    context 'user logged in and admin' do
      login_admin
      it 'should render show for admin user' do
        user = FactoryGirl.create(:user, email: '2@facilitator.controller.spec', uid: '2.facilitator.controller.spec')
        facilitator = FactoryGirl.create(:facilitator, user_id: user.id)
        get :show, id: facilitator.id
        expect(response).to render_template(:show)
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'user not logged in' do
      it 'should redirect to root_path for non_user' do
        delete :destroy, id: 1
        expect(response).to redirect_to(root_path)
      end
    end

    context 'user logged in but not admin' do
      login_user
      it 'should redirect to home_path for non_admin' do
        delete :destroy, id: 1
        expect(response).to redirect_to(controller.home_path)
      end
    end

    context 'user logged in and admin' do
      login_admin
      it 'should redirect with success for admin user' do
        user = FactoryGirl.create(:user, email: '2@facilitator.controller.spec', uid: '2.facilitator.controller.spec')
        facilitator = FactoryGirl.create(:facilitator, user_id: user.id)
        delete :destroy, id: facilitator.id
        expect(response).to redirect_to(facilitators_path(cohort: controller.current_cohort))
        expect(flash[:success]).not_to be_nil
      end
    end
  end
end
