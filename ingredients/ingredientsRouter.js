const router = require('express').Router();
const ingredients = require('./ingredientsModel')




router.post('/update/:id', (req, res) => {
  let ingredient = req.body;
    let id = req.params.id
  ingredients.update(id, ingredient)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});
router.post('/delete/:id', (req, res) => {
  
    let id = req.params.id
  ingredients.delete(id)
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


