every 1.hour do
  runner 'MailWorker.daily_preorders'
end