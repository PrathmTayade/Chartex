import Data from "../models/dataModel.js";

const getInsights = async (filters) => {
  try {
    
    const query = {};

    if (filters.endYear) {
      query.end_year = filters.endYear;
    }

    if (filters.topics) {
      query.topic = { $in: filters.topics };
    }

    if (filters.sector) {
      query.sector = filters.sector;
    }

    if (filters.region) {
      query.region = filters.region;
    }

    if (filters.pestle) {
      query.pestle = filters.pestle;
    }

    if (filters.source) {
      query.source = filters.source;
    }

    if (filters.swot) {
      query.swot = filters.swot;
    }

    if (filters.country) {
      query.country = filters.country;
    }

    if (filters.city) {
      query.city = filters.city;
    }

    return await Data.find(query);
  } catch (error) {
    console.log(error, error.message("Error getting Insights"));
  }
};

export default getInsights;
