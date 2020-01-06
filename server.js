const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authMiddleware');
const authRouter = require('./auth/authRouter.js');
// const reciepeRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
// server.use('/api/jokes', authenticate, jokesRouter);
server.get('/', (req, res) => {
    console.log("its alive")
})
module.exports = server;
