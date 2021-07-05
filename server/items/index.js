const express = require("express");
const db = require("./db/config");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM items", (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json([data.rows]);
    }
  });
});

app.get("/api/items/:id", (req, res) => {
  db.query("SELECT a.id, a.name, a.description, a.model, a.category, a.company, a.price, b.image_url FROM items AS a INNER JOIN item_images AS b ON a.id=b.item_id WHERE a.id=$1 LIMIT 1;",
  [req.params.id], (err, data) => {
    if (err) {
      console.log("err", err);
      res.status(404).send(err);
    } else {
      res.json([data.rows[0]]);
    }
  });
});

app.post("/api/items/search", (req, res) => {
  const {search_string} = req.body;
  const query = `SELECT * FROM items WHERE (name || description) LIKE $1 LIMIT 10`
  db.query(query, ['%' + search_string + '%'], (err, data) => {
    res.status( (err) ? (console.log(err), 400) : 200 )
    res.json( (err) ? err : data );

  });
});

app.listen(3001, () => {
  console.log("listening on Port 3001");
});
