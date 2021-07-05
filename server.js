const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
var cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors())
app.options('*', cors());
app.use(express.static("public"));
app.use(
  createProxyMiddleware("/api", {
    target: "http://localhost:4000",
    router: {
      "/cart": "http://localhost:3000",
      "/items": "http://localhost:3001",
      "/search": "http://localhost:3002",
      "/users": "http://localhost:3003",
      "/images": "http://localhost:3004",
    },
  })
);

app.listen(PORT, () => {

  console.log(`listening on Port ${PORT}`);
});
