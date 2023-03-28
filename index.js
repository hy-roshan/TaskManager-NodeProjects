const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.static("public"));
//Environment Variables
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config/config.env") });

//Database Connection
const connectDB = require("./config/db");
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// importing router
const router = require("./routes/tasks");

app.use("/api/v1/tasks", router);

app.listen(3000);
