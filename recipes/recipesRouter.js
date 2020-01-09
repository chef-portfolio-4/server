const router = require('express').Router();
const Recipes = require('./recipesModel')
router.get('/chef/:id', (req, res) => {
    
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

router.get('/:id', async(req, res) => {
    
    let id = req.params.id

    try{
      const recipe = await Recipes.findById(id)
      const steps = await Recipes.findRecipeSteps(id)
      const ingredients = await Recipes.findRecipeIngredients(id)
      res.status(200).json({...recipe, steps, ingredients});
    }
   
    catch(error) {
      res.status(500).json(error);
      console.log(error, "error")
    };
});

router.get('/steps/:id', (req, res) => {
    
  let id = req.params.id
  Recipes.getAll(id)
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(error => {
    res.status(500).json(error);
    console.log(error, "error")
  });
});

router.post('/:id', (req, res) => {
  let recipe = req.body;
    let id = req.params.id
  Recipes.updateProfile(id, recipe)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});



router.post('/:id/ingredients', (req, res) => {
  let ingredient = req.body;
    let id = req.params.id
  Recipes.addIngredient(ingredient, id)
    .then(saved => {
      res.status(201).json(saved);
      console.log('its works')
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});




module.exports = router 