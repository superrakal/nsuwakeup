class MailWorker
  include Sidekiq::Worker

  def perform
    PreorderMailer.today_preorders.deliver
  end

  def self.daily_preorders
    self.perform_async
  end
end