const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./subscribe"));

// this command needs to be in afterwards, for some reason
const dbo = require("./connect");

app.listen(port, () => {
  dbo.connectToServer(function (error) {
    if (error) console.error(error); 
  });
  console.log(`Server is running on port: ${port}`);
});
