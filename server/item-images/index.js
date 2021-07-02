const express = require("express");
const db = require("./db/config");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/api/images/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM item_images WHERE item_id=$1;",
    [id],
    (err, data) => {
      if (err) {
        res.status(404).send(err);
        console.log('nope')
      } else {
        res.json(data.rows)
      }
    }
  );
});

app.listen(3004, () => {
  console.log("listening on Port 3004");
});
