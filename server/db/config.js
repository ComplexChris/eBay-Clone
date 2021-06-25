const { Pool } = require("pg");

const pool = new Pool({
  user:'cristianperez',
  database: 'mockebay',
  port:5432
});

module.exports = pool;