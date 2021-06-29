const express = require("express");
const db = require("./db/config");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT name,image_url FROM product WHERE id=$1;",
    [id],
    (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(data.rows);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("listening on Port 3001");
});
