const objSequelize = require('sequelize'); // sequelize is a middleware to work with DB like ORM (object Relation Mapping)
let objPostgres = require('pg') // middlewear for postgres db

//establishing connection
//syntax for connection
//const objDBConnection = new objSequelize.Sequelize('DBName', 'UserName', 'Password', {/* hosting related information */})
const objDBConnection = new objSequelize.Sequelize('TestDB', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres', //driver to connect with postgres /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false // to log each in console
})


module.exports = { objDBConnection}