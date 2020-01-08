const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authMiddleware');
const authRouter = require('./auth/authRouter.js');
const profileRouter = require('./auth/authProfileRouter')
const recipeRouter = require('./recipes/recipesRouter')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/profile', profileRouter);
server.use('/api/recipes', recipeRouter);
server.get('/', (req, res) => {
    console.log("its alive")
})
module.exports = server;
