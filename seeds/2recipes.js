exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('recipes').insert([
        {
          "name": "recipe1",
          "description": "pass",
          "meal_type": "lunch",
          "time": "1 hours",
          "chef_id": 1
        },
        {
          "name": "recipe2",
          "description": "pass",
          "meal_type": "dinner",
          "time": "3 hours",
          "chef_id": 1
        },
        {
          "name": "recipe3",
          "description": "pass",
          "meal_type": "breakFeast",
          "time": "2 hours",
          "chef_id": 1
        },
      ]);
    ;
};