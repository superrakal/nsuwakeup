every 1.day, :at => '6:45 pm' do
  runner 'MailWorker.daily_preorders'
end