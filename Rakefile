$:.unshift(File.dirname(__FILE__) + '/../../lib')
require 'cucumber/rake/task'

namespace :test do
  task :unit do
    puts "\n\nUNIT TESTS\n----------"
    puts `node test/unit/*.js`
    puts 'Tests Complete'
  end
  task :integration do
    puts "\n\nINTEGRATION TESTS\n----------"
    puts `node test/integration/*.js`
    puts 'Tests Complete'
  end
end
task :test => ['test:unit', 'test:integration']
task :default => :test

