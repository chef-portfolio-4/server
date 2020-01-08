const router = require('express').Router();
const Recipes = require('./recipesModel')
router.get('chef/:id', (req, res) => {
    
    let id = req.params.id
    Recipes.getChefRecipes(id)
    .then(chef_recipes => {
      res.status(201).json(chef_recipes);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});
router.get('/', (req, res) => {
    
    
    Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});

router.get('/:id', (req, res) => {
    
    let id = req.params.id
    Recipes.findById(id)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});

router.post('/update/:id', (req, res) => {
  let recipe = req.body;
    let id = req.params.id
  Chefs.updateProfile(id, recipe)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});



module.exports = router 