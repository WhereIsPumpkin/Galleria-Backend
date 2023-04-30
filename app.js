import express from "express";
import dotenv from "dotenv";
import { getPaintings } from "./controllers/paintingController.js";
import connect from "./database/mongo.js";

dotenv.config();
connect();

const app = express();

app.use("/assets", express.static("./public/assets"));

app.get("/", getPaintings);

app.listen(3000);
