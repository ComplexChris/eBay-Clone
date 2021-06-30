const express = require("express");
const db = require("./db/config");

const app = express();

app.use(express.static("public"));
app.use(express.json());


app.get("/api/search/history/:limit", (req, res) => {
  console.log( "REQ: ", req.params.limit )
  const limit = req.params.limit || 10;
  db.query("SELECT * FROM history ORDER BY date_searched desc limit $1", [limit], (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json([data.rows]);
    }
  });
});
app.get("/api/search/history", (req, res) => {
  db.query("SELECT * FROM history ORDER BY date_searched desc limit 10", (err, data) => {
    if (err) {
      res.status(403).send(err);
    } else {
      res.json([data.rows]);
    }
  });
});

app.post("/api/search/history", (req, res) => {
  const {query, search_date} = req.body
  // Data validation for correct variables
  if ((query && search_date) ? false:true){
    // Invalid vars passed
    res.status(403).send("Insufficient parameters passed.");
    return;
  }
  const cmd = `insert into history (query, date_searched) values ($1, $2) returning *`
  db.query(cmd, [query, search_date], (err, data) => {
    if (err) {
      res.status(403).send(err);
    } else {
      res.json([data.rows]);
    }
  });
});

app.listen(3002, () => {
  console.log("Search listening on Port 3002");
});
