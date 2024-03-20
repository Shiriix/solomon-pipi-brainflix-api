const express = require("express");
require("dotenv").config();
const videoRouter = require("./routes/videoRoutes");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use((req, _res, next) => {
  console.log(
    `Incoming request: ${new Date().toISOString()} ${req.path},  Host: ${
      req.hostname
    } / IP: ${req.ip}`
  );
  next();
});
app.use(cors({ origin: process.env.REACT_FE }));
app.use(express.json());
app.use(express.static("public"));

app.use("/videos", videoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
