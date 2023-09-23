const express = require("express");
const dataRouter = require("./server/routes/data.routes");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/api", dataRouter);

app.listen(PORT, () => console.log("server WORK"));
