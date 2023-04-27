import Data from "../models/dataModel.js";

const getRegion = async (req, res) => {
  try {
    const sectors = await Data.aggregate([
      {
        $group: {
          _id: "$region",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          region: "$_id",
          count: 1,
          _id: 0,
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    // Add "No sector available" for data not having the field
    const nullSector = sectors.find((region) => region.region === "");
    if (nullSector) {
      nullSector.region = "No Region ";
    } else {
      sectors.push({ region: "No Region ", count: 0 });
    }

    res.json(sectors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
export default getRegion;
