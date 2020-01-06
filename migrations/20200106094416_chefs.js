
exports.up = function(knex) {
  return knex.schema.createTable('chefs', chef => {
      chef.increments()

      chef
      .string('username', 255)
      .notNullable()
      .unique();

        chef.string('password', 255).notNullable();
        chef.string('name', 26).notNullable();

        chef.string('location' , 120).notNullable
  })

  .createTable('recipes', recipe => {
    recipe.increments()

    recipe
    .string('name', 10)
    .notNullable()
    

    recipe.string('description', 255).notNullable();
    recipe.string('Full', 26).notNullable();

    recipe.string('location' , 120).notNullable
})

.createTable('steps', step => {
  step.increments()

  step
  .string('username', 255)
  .notNullable()
  .unique();

    step.string('password', 255).notNullable();
    step.string('Full', 26).notNullable();

    step.string('location' , 120).notNullable
})

.createTable('ingridents', ingrident => {
  ingrident.increments()

  ingrident
  .string('username', 255)
  .notNullable()
  .unique();

  ingrident.string('password', 255).notNullable();
  ingrident.string('Full', 26).notNullable();

    ingrident.string('location' , 120).notNullable
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('chefs')
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingridents');
};
