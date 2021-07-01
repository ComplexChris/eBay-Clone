const express = require("express");
const db = require("./db/config");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/api/cart", (req, res) => {
  db.query("SELECT * FROM cart", (err, data) => {
    if (err) {
      console.log("hey", err);
      res.append("Content-Type", "plain/text");
      res.status(404).send(err);
    } else {
      res.append("Content-Type", "application/json");
      res.json(data.rows);
    }
  });
});

app.post('/api/cart/', (req,res)=>{
  const cart = req.body;

  db.query('INSERT INTO cart (userId, itemId) VALUES ($1, $2);', [cart.userId,
  cart.itemId], (err,data)=>{
      if(err) {
        console.log(err);
          res.append('Content-Type', 'plain/text');
          res.status(400).send(`An error has occurred!`);
      } else {
          res.append('Content-Type', 'application/json');
          res.status(200).send('Congrats your post request worked!');
      }
  });

});

app.delete("/api/cart/:itemId", (req, res) => {
  const { itemId } = req.params;

  db.query("DELETE FROM CART WHERE itemId=$1;", [itemId], (err, data) => {
    if (err) {
      console.log("This is the error: ", err);
      res.append("Content-Type", "plain/text");
      res.status(404).send(err);
    } else {
      res.append("Content-Type", "application/json");
      res.send(`Item ${itemId} was successfully deleted.`);
    }
  });
});

app.listen(3000, () => {
  console.log("listening on Port 3000");
});
