const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

//middleware for bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "views")));

app.use("/openai", require("./routes/openaiRoute"));

app.listen(port, () =>
  console.log(`Server is running on ${port}, you better go catch it`)
);
