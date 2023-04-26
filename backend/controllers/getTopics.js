import Data from "../models/dataModel.js";

const getTopics = function () {
  Data.aggregate([
    {
      $group: {
        _id: "$topic",
        count: { $sum: 1 },
      },
    },
    {
      $sortByCount,
    },
  ])
    .then((result) => {
      console.log("data fetched: ");
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
};
export { getTopics };
