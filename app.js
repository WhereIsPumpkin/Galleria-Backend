import express from "express";
import dotenv from "dotenv";
import { getPaintings } from "./controllers/paintingController.js";
import connect from "./database/mongo.js";
import cors from "cors";

dotenv.config();
connect();

const app = express();

app.use(cors());

app.use("/assets", express.static("./public/assets"));

app.get("/", getPaintings);

app.listen(3000);
