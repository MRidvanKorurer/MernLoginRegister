const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const conn = require("./db/connect");
const authRouter = require("./routes/auth");

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(port, () => {
  conn();
  console.log(`Application running on port: ${port}`);
});
