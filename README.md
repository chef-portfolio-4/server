# server

# base url
https://chefportfolio2020.herokuapp.com/


# register
https://chefportfolio2020.herokuapp.com/api/auth/register

requires data as following format:

    {
        "username": "username",
        "password": "password",
        "name": "name",
        "location": "location"
    }
### returns new users obj 

# login
https://chefportfolio2020.herokuapp.com/api/auth/login

requires data as following format:

    {
        "username": "username",
        "password": "password"
    }

### returns token
    {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvdCIsImlhdCI6MTU3ODM1OTAyNiwiZXhwIjoxNTc4MzYyNjI2fQ.LIJmxqrjHRaXLyRyuWLN_dTfcKas4-eGJ8XO6XBV8BM",
  "message": "Welcome name!"
}

# chef profile data

### get profile data

https://chefportfolio2020.herokuapp.com/api/profile/:id

returns

{
  "id": 1,
  "username": "user",
  "password": "$2a$10$Ol8/wbMIWMO3DE7oYojzy.DYMGHjxObwbRHvjG7wvuRCMJd4GT5gW",
  "name": "SquarePants",
  "email": "krusty@Gmail.com",
  "location": "usa"
}

### update profile data

https://chefportfolio2020.herokuapp.com/api/profile/update/:id

returns

{
  "id": 1,
  "username": "user",
  "password": "$2a$10$Ol8/wbMIWMO3DE7oYojzy.DYMGHjxObwbRHvjG7wvuRCMJd4GT5gW",
  "name": "SquarePants",
  "email": "krusty@Gmail.com",
  "location": "usa"
}

# recipes


### addd recipe

https://chefportfolio2020.herokuapp.com/api/recipes/addRecipe

expects data 

{
          "name": "recipe1",
          "description": "pass",
          "meal-type": "lunch",
          "time": "1 hours",
          "chef_id": 1
}

### get all recipes

https://chefportfolio2020.herokuapp.com/api/recipes/

##### returns

[
  {
    "id": 1,
    "name": "recipe1",
    "description": "pass",
    "meal-type": "lunch",
    "time": "1 hours",
    "chef_id": 1
  },
  {
    "id": 2,
    "name": "recipe2",
    "description": "pass",
    "meal-type": "dinner",
    "time": "3 hours",
    "chef_id": 1
  },
  {
    "id": 3,
    "name": "recipe3",
    "description": "pass",
    "meal-type": "breakFeast",
    "time": "2 hours",
    "chef_id": 1
  }
]

### get recipes by chef id

https://chefportfolio2020.herokuapp.com/api/recipes/chef/:id


##### returns

[
  {
    "id": 1,
    "name": "recipe1",
    "description": "pass",
    "meal-type": "lunch",
    "time": "1 hours",
    "chef_id": 1
  },
  {
    "id": 2,
    "name": "recipe2",
    "description": "pass",
    "meal-type": "dinner",
    "time": "3 hours",
    "chef_id": 1
  },
  {
    "id": 3,
    "name": "recipe3",
    "description": "pass",
    "meal-type": "breakFeast",
    "time": "2 hours",
    "chef_id": 1
  }
]

### get recipe by id

https://chefportfolio2020.herokuapp.com/api/recipes/:id


##### returns

{
  "id": 1,
  "name": "recipe1",
  "description": "pass",
  "meal-type": "lunch",
  "time": "1 hours",
  "chef_id": 1,
  "steps": [
    {
      "id": 1,
      "title": "Kill eggs",
      "order": "1",
      "directions": "blahh",
      "recipe_id": 1
    },
    {
      "id": 2,
      "title": "cook egg flesh",
      "order": "2",
      "directions": "jsut do it",
      "recipe_id": 1
    },
    {
      "id": 3,
      "title": "feast on dead egg babbies",
      "order": "3",
      "directions": "do it",
      "recipe_id": 1
    }
  ],
  "ingredients": [
    {
      "recipe_id": 1,
      "ingredient_id": 1,
      "id": 1,
      "name": "eggs"
    },
    {
      "recipe_id": 1,
      "ingredient_id": 2,
      "id": 2,
      "name": "milk"
    },
    {
      "recipe_id": 1,
      "ingredient_id": 3,
      "id": 3,
      "name": "cereal"
    }
  ]
}

### update recipe by id

https://chefportfolio2020.herokuapp.com/api/recipes/:id

##### returns

{
  "id": 1,
  "username": "user",
  "password": "$2a$10$Ol8/wbMIWMO3DE7oYojzy.DYMGHjxObwbRHvjG7wvuRCMJd4GT5gW",
  "name": "SquarePants",
  "email": "krusty@Gmail.com",
  "location": "usa"
}

### add intgrednt by recipe id

https://chefportfolio2020.herokuapp.com/api/recipes/:id/ingredients

##### returns

201 status


### get all steps by recipe id

https://chefportfolio2020.herokuapp.com/api/recipes/steps/:id

##### returns

[
  {
    "name": "recipe1",
    "description": "pass",
    "meal-type": "lunch",
    "time": "1 hours",
    "title": "Kill eggs",
    "order": "1",
    "directions": "blahh"
  },
  {
    "name": "recipe1",
    "description": "pass",
    "meal-type": "lunch",
    "time": "1 hours",
    "title": "cook egg flesh",
    "order": "2",
    "directions": "jsut do it"
  },
  {
    "name": "recipe1",
    "description": "pass",
    "meal-type": "lunch",
    "time": "1 hours",
    "title": "feast on dead egg babbies",
    "order": "3",
    "directions": "do it"
  }
]

### update step

https://chefportfolio2020.herokuapp.com/api/steps/update/:id

### delete step

https://chefportfolio2020.herokuapp.com/api/steps/delete/:id

### update ingredient

https://chefportfolio2020.herokuapp.com/api/ingredient/update/:id

### delete ingrident

https://chefportfolio2020.herokuapp.com/api/ingredient/delete/:id


