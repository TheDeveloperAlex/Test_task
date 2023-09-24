const express = require("express");
const cors = require("cors");
const dataRouter = require("./server/routes/data.routes");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api", dataRouter);

app.listen(PORT, () => console.log("server WORK"));
