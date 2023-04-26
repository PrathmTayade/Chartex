import express from "express";
import Data from "../models/dataModel.js";

const router = express.Router();

//get Topics
router.get("/topics", async (req, res) => {
  try {
    const data = await Data.aggregate([
      {
        $group: {
          _id: "$topic",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error getting data");
  }
});

//Get sectors
router.get("/sectors", async (req, res) => {
  try {
    const sectors = await Data.aggregate([
      {
        $group: {
          _id: "$sector",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          sector: "$_id",
          count: 1,
          _id: 0,
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    // Add "No sector available" for data not having the field
    const nullSector = sectors.find((sector) => sector.sector === "");
    if (nullSector) {
      nullSector.sector = "No sector available";
    } else {
      sectors.push({ sector: "No sector available", count: 0 });
    }

    res.json(sectors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export { router as dataRoute };
