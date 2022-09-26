/* eslint-disable n/no-path-concat */
module.exports = {
  development: {
    client: 'mysql2', // Lib
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'pagtel',
      database: 'db_order_register_challenge'
    },
    migrations: {
      directory: `${__dirname}/src/infra/knex/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/infra/knex/seeds`
    }

  }
}
