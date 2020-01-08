const router = require('express').Router();
const ingredients = require('./ingredientsModel')
router.get('/recipes/:id', (req, res) => {
    
    let id = req.params.id
    steps.getRecipeSteps(id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});
router.get('/', (req, res) => {

    steps.find()
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});

router.post('/:id', (req, res) => {
    
    let id = req.params.id
    steps.findById(id)
    .then(step => {
      res.status(200).json(step);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});

router.post('/update/:id', (req, res) => {
  let step = req.body;
    let id = req.params.id
  steps.update(id, step)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});



module.exports = router const express =require('express').Router()


