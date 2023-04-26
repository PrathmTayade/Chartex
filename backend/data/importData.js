import fs from "fs";
import  Data  from "../models/dataModel.js";


const data = JSON.parse(fs.readFileSync("./data/jsondata.json", "utf8"));

const importData = async () => {
  try {
    await Data.insertMany(data);
    console.log("data successfully inserted");
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};

export default importData;
