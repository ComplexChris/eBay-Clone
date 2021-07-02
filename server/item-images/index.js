const express = require("express");
const db = require("./db/config");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT image_url FROM item_images WHERE id=$1;",
    [id],
    (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        console.log(data);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("listening on Port 3001");
});
