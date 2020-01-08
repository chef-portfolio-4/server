exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('steps').insert([
        {
          "title": "Kill eggs",
          "order": "1",
          "directions": "blahh",
          "recipe_id": 1
        },
        {
          "title": "cook egg flesh",
          "order": "2",
          "directions": "jsut do it",
          "recipe_id": 1
        },
        {
          "title": "feast on dead egg babbies",
          "order": "3",
          "directions": "do it",
          "recipe_id": 1
        },
      ]);
    ;
};
