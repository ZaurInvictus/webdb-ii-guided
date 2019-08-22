
exports.seed = function(knex) {
 
  return knex('fruits')
    .truncate() // clears the table and resets the id while delete is only clears the table
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {name: 'mango'},
        {name: 'pineapple'},
        {name: 'tomato'}
      ]);
    });
};
