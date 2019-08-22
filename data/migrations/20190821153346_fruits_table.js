
// UP are the changes to make to the schema
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    tbl.increments()  // sets: primary key, called id, integer, autoincrements
    tbl.string('name', 128).unique().notNullable()
    tbl.decimal('avg-weight')
  })
};


// DOWN how we undo changes in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
