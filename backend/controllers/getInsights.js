import Data from "../models/dataModel.js";

const getInsights = async (req, res) => {
  const { endYear, topic, sector, region, pest, source, swot, country, city } =
    req.query;

  const filter = {};

  if (endYear) {
    filter.end_year = endYear;
  }

  if (topic) {
    filter.topic = topic;
  }

  if (sector) {
    filter.sector = sector;
  }

  if (region) {
    filter.region = region;
  }

  if (pest) {
    filter.pestle = pest;
  }

  if (source) {
    filter.source = source;
  }

  if (swot) {
    filter.swot = swot;
  }

  if (country) {
    filter.country = country;
  }

  if (city) {
    filter.city = city;
  }

  try {
    const insights = await Data.find(filter);

    res.json(insights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getInsights;
