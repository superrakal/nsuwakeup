class PreorderMailer < ApplicationMailer
  def new_preorder(preorder)
    @preorder = preorder
    mail charset: 'utf-8', to: 'topol009@mail.ru', subject:'Новый предзаказ'
  end
end
