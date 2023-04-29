import Data from "../models/dataModel.js";

const getStats = async (req, res) => {
  try {
    const result = await Data.aggregate([
      {
        $group: {
          _id: null,
          sectors: { $addToSet: "$sector" },
          insights: { $addToSet: "$insight" },
          topics: { $addToSet: "$topic" },
          regions: { $addToSet: "$region" },
        },
      },
      {
        $project: {
          _id: 0,
          sectors: { $size: "$sectors" },
          insights: { $size: "$insights" },
          topics: { $size: "$topics" },
          regions: { $size: "$regions" },
        },
      },
    ]);

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
export default getStats;
