const router = require('express').Router();

const Chefs = require('./authModel')

router.post('/update/:id', (req, res) => {
  let chef = req.body;
    let id = req.params.id
  Chefs.updateProfile( id,chef)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});
router.get('/:id', (req, res) => {
      let id = req.params.id
    Chefs.findById(id)
      .then(saved => {
        res.status(201).json(saved);
        console.log
      })
      .catch(error => {
        res.status(500).json(error);
        console.log(error, "error")
      });
  });




module.exports = router;
