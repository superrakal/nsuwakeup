class MailWorker
  include Sidekiq::Worker

  def daily_preorders(name, count)
    PreorderMailer.today_preorders.deliver
  end
end