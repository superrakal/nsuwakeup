class PreorderMailer < ApplicationMailer
  def new_preorder(preorder)
    @preorder = preorder
    mail charset: 'utf-8', to: 'topol009@mail.ru', subject:'Новый предзаказ'
  end

  def today_preorders
    @preorders = Preorder.where(:created_at.gte => Time.zone.now.beginning_of_day)
    mail charset: 'utf-8', to: 'topol009@mail.ru', subject:'Отчет'
  end
end
