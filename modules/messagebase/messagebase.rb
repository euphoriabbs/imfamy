
#!/usr/bin/env ruby
# encoding: UTF-8

require "yard"
require "sqlite3"
require "ini"

module Message

    class Base
        
        def create(data = :object || :json)
        end

        def read(data = :object || :json)
        end

        def update(data = :object || :json)
        end 

        def delete(data = :object)
        end
    end
end