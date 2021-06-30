const { Pool } = require("pg");

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://localhost:5432/fec",
});

module.exports = pool;
