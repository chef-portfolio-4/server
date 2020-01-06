require('dotenv').config();

const knex = require("knex");
const config = require("./knexfile.js");
const environment = process.env.DB_CONNECT || "production";

module.exports = knex(config[environment]);