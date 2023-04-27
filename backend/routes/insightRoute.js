import express from "express";
import Data from "../models/dataModel.js";
import getInsights from "../controllers/getInsights.js";

const router = express.Router();

router.get("/", getInsights);

export { router as insightRoute };
