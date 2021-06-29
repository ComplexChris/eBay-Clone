const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://localhost:5432/fec",
});

module.exports = pool;
