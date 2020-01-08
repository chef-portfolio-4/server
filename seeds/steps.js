exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('steps').insert([
        {
          "title": "scrambled eggs",
          "order": "pass",
          "description": "blahh",
          "time": "2 hours",
          "recipe_id": 1
        },
        {
          "title": "toast",
          "order": "pass",
          "description": "blahh",
          "time": "2 hours",
          "recipe_id": 1
        },
        {
          "title": "cereal",
          "order": "pass",
          "description": "blahh",
          "time": "2 hours",
          "recipe_id": 1
        },
      ]);
    ;
};
