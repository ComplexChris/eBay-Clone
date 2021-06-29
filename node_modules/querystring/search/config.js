const { Pool } = require("pg");

DATABASE_URL=`postgres://toor:password@localhost:5432/Ebay`

const pool = new Pool({
<<<<<<< HEAD:server/Search Service/config.js
  // https://stackoverflow.com/questions/3582552/what-is-the-format-for-the-postgresql-connection-string-url
  connectionString: DATABASE_URL,
=======
    user: 'josee.lozanojr.',
    database: 'fec',
    port: 5432
>>>>>>> main:server/db/config.js
});

module.exports = pool;
