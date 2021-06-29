const express = require("express");
const db = require("./cristian-server/config");

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
  db.query("SELECT * FROM items WHERE id=$1;", [req.params.id], (err, data) => {
    if (err) {
      console.log("err", err);
      res.status(404).send(err);
    } else {
      res.json([data.rows]);
    }
  });
});
<<<<<<< HEAD:server/index.js


app.get('/product/:id', (req,res) => {
    const {id} = req.params;
    db.query('SELECT name,image_url FROM product WHERE id=$1;',[id],(err,data) => {
        if(err){
            res.status(404).send(err)
          
        }else{
            res.send(data.rows);
        }
    })
});

=======
>>>>>>> main:server/items/index.js

app.listen(3001, () => {
  console.log("listening on Port 3001");
});
