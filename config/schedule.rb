every 10.minutes do
  runner 'MailWorker.daily_preorders'
end