const bcrypt = require('bcryptjs')
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('chefs').insert([
        {
          "username": "user",
          "password": bcrypt.hashSync('pass', 10),
          "name": "SquarePants",
          "email": "krusty@Gmail.com",
          "location": "usa"
        },
        {
          "username": "dev",
          "password": bcrypt.hashSync('pass', 10),
          "name": "bob",
          "email": "krusty@Gmail.com",
          "location": "usa"
        },
        {
          "username": "chef",
          "password": bcrypt.hashSync('pass', 10),
          "name": "sponge",
          "email": "krusty@Gmail.com",
          "location": "usa"
        },
      ]);
    ;
};
