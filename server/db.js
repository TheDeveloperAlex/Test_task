const Pool = require("pg").Pool;

const pool = new Pool({
  user: "alexandersemenenko",
  password: "1234",
  host: "localhost",
  port: "5432",
  database: "test_task",
});

module.exports = pool;
