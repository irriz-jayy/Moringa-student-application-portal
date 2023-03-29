# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

use Rack::Cors do
    allow do
        origins "*"
        resource "*", headers: :any, methods: [:get, :post, :delete, :patch, :put, :options, :head]
    end
end
