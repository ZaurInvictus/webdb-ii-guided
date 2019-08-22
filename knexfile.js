// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};

// RULE: EVERY SCHEMA CHANGE NEEDS A NEW MIGRATION

// KNEX MIGRATIONS
// npm knex // to see list of commands
// npx knex init
// npx knex migrate:make fruits_table
// npx knex migrate:latest // to update database to the latest migrations
// npx knex migrate:rollback // to roll back database

// KNEX SEEDS
// npm knex seed:make 001-fruits
// npm knex seed:run