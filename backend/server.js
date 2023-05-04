import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import { dataRoute } from "./routes/dataRoute.js";
import importData from "./data/importData.js";
import { getTopics } from "./controllers/getTopics.js";
import { insightRoute } from "./routes/insightRoute.js";
// CONFIG

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/data", dataRoute);
app.use("/insights", insightRoute);

// MongoDB

//! Importing Data to mongoDB run just once
// importData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
