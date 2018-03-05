class PaymentController < ApplicationController
  def show
    @va_acc_no = params[:id]
  end
end
