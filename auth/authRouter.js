const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Chefs = require('./authModel')

router.post('/register', (req, res) => {
  let chef = req.body;
  const hash = bcrypt.hashSync(chef.password, 10); // 2 ^ n
  chef.password = hash;

  Chefs.add(chef)
    .then(saved => {
      res.status(201).json(saved);
      console.log
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error, "error")
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Chefs.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // sign token
        const token = signToken(user); // new line

        // send the token
        res.status(200).json({
          token, // added token as part of the response sent
          message: `Welcome ${user.username}!`,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function signToken(user) {
  const payload = {
    username: user.username,
    // role: "student", // this will come from the database users.role
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options); // notice the return
}

module.exports = router;
