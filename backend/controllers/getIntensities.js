import Data from "../models/dataModel.js";

async function getIntensity(req, res) {
  const pipeline = [
    {
      $match: {
        sector: "Energy",
        end_year: { $ne: "" },
        intensity: { $ne: null },
      },
    },
    {
      $group: {
        _id: "$end_year",
        intensity: { $first: "$intensity" },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id",
        intensity: 1,
      },
    },
  ];
  try {
    const intensity = await Data.aggregate(pipeline);
    return res.json(intensity);
  } catch (error) {
    console.error(error);
  }
}

export default getIntensity;
