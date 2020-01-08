
exports.up = function(knex) {
  return knex.schema.createTable('chefs', chef => {
      chef.increments()

      chef
      .string('username', 255)
      .notNullable()
      // .unique();

        chef.string('password', 255).notNullable();
        chef.string('name', 26).notNullable();
        chef.string('email', 25).notNullable()
        chef.string('location' , 120).notNullable()
  })

  .createTable('recipes', recipe => {
    recipe.increments()

    recipe
    .string('name', 10)
    .notNullable()
    

    recipe.string('description', 255).notNullable();
    
    recipe.string('meal-type', 20).notNullable();

    recipe.string('time', 20).notNullable()

    recipe
      .integer('chef_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('chefs')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
})

.createTable('steps', step => {
  step.increments()

  step
  .string('title', 255)
  .notNullable()
  
  step.string('order', 25).notNullable();

    step.string('directions', 255).notNullable();
    

    step.integer('recipe_id').unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
})

.createTable('ingredients', ingredient => {
  ingredient.increments()

  ingredient
  .string('name', 40)
  .notNullable()
  .unique();

})

.createTable('recipe_ingredients', tbl => {
  tbl.primary(["recipe_id", "ingredient_id"])
  
  tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE')

  tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onUpdate('CASCADE').onDelete('CASCADE')

})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('chefs')
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingridents')
    .dropTableIfExists('recipe_ingredients')
};
