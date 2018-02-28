#!/usr/bin/env ruby
# encoding: UTF-8

BEGIN {
    unless ENV["INIQUITY_SYSTEM"]
        abort "Please set the INIQUITY_SYSTEM environment variable."
    end
}

trap("INT") {exit}

SYSTEM = ENV["INIQUITY_SYSTEM"] || Dir.pwd
ENV["INIQUITY_SYSTEM"] = SYSTEM

require "inifile"
require "sqlite3"

class Answer
    def initialize
        self.ini = IniFile.load("#{SYSTEM}/answer/answer.ini")
        self.db = SQLite3::Database.new "#{SYSTEM}/answer/answer.db"

        unless File.exists?(SYSTEM + "/answer/answer.db")
            DB.execute <<-SQL
                create table answer (
                    name varchar(30),
                    val int
                );
            SQL
        end
    end

    self.run {

    }
end

def main

    answer = Answer.new()
    answer.run()

end

main()

