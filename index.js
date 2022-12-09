const { json } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

//middleware for bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoute"));

app.listen(port, () =>
  console.log(`Server is running on ${port}, you better go catch it`)
);
