// require('dotenv').config();

// const knex = require("knex");
// const config = require("./knexfile.js");
// const environment = process.env.DB_CONNECT || "production";

// module.exports = knex(config[environment]);

const knex = require('knex');

const knexConfig = require('./knexfile.js');

module.exports = knex(knexConfig.development);
