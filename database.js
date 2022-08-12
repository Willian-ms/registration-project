host = 'localhost'
port = `3306`
user = 'root'
password = 'root'
database = 'main_db'
users_table = 'users'

module.exports = {
  connection: {
    host: host,
    port: port,
    user: user,
    password: password
  },
  database: database,
  users_table: users_table
}