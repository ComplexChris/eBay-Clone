const { Pool } = require("pg");

DATABASE_URL=`postgres://toor:password@localhost:5432/Ebay`

const pool = new Pool({
  // https://stackoverflow.com/questions/3582552/what-is-the-format-for-the-postgresql-connection-string-url
  connectionString: DATABASE_URL,
});

module.exports = pool;
