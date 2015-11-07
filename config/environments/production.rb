Rails.application.configure do
  require 'redis'
  @redis = Redis.new
  config.middleware.use Rack::Prerender,
                        before_render: (Proc.new do |env|
                          @redis.get(Rack::Request.new(env).url)
                        end),
                        after_render: (Proc.new do |env, response|
                          @redis.set(Rack::Request.new(env).url, response.body)
                        end)


  config.cache_classes = true
  config.eager_load = true
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true
  config.serve_static_files = ENV['RAILS_SERVE_STATIC_FILES'].present?
  config.assets.js_compressor = :uglifier
  config.assets.compile = false
  config.assets.digest = true
  config.log_level = :debug
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify

  config.active_support.deprecation = :notify
  config.action_mailer.default_url_options = { :host => 'nsuwakeup.ru' }
  ActionMailer::Base.delivery_method = :smtp
  ActionMailer::Base.perform_deliveries = true
  ActionMailer::Base.raise_delivery_errors = true
  ActionMailer::Base.smtp_settings =
      {
          :address => 'smtp.gmail.com',
          :port => 587,
          :domain => 'gmail.com',
          :authentication => :plain,
          :user_name => 'nsuwakeup@gmail.com',
          :password => 'basset2011'
      }

  config.log_formatter = ::Logger::Formatter.new
end
