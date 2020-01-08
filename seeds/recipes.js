exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('recipes').insert([
        {
          "name": "recipe1",
          "description": "pass",
          "chef_id": 1
        },
        {
          "name": "recipe2",
          "description": "pass",
          "chef_id": 1
        },
        {
          "name": "recipe3",
          "description": "pass",
          "chef_id": 1
        },
      ]);
    ;
};