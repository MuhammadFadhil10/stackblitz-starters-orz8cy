import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sitolautRouter from "./routes/sitolaut.routes.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use(sitolautRouter);

app.use("/", (req, res) => {
  return res.json({ message: "success" });
});
app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
