require 'guard/jasmine/task'

Guard::JasmineTask.new do |task|
  port = 4269
  task.options = "-s thin -p #{port} -u http://localhost:#{port}/jasmine -e development --server-timeout=60"
end

task :default => "guard:jasmine"
