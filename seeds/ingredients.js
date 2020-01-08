exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('ingredients').insert([
        {
          "name": "eggs"
        },
        {
          "name": "milk"
        },
        {
          "name": "cereal"
        },
      ]);
    ;
};
