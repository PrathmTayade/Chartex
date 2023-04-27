import {
  Chart as ChartJS,
  Colors,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetTopicsQuery } from "../../redux/apis/api";
import autocolors from "chartjs-plugin-autocolors";
import { Box } from "@mui/material";
import Header from "../ui/Header";

ChartJS.register(ArcElement, Tooltip, Legend,Colors );

function Topics() {
  const { data, error, isLoading } = useGetTopicsQuery();

  if (isLoading) {
    return <div className="text-center ">Loading data from database</div>;
  }

  if (error) {
    return <div>Error getting data</div>;
  }

  const topicsData = {
    labels: data.map((t) => t._id),

    datasets: [
      {
        label: "No.sectors:",
        data: data.map((t) => t.count),
      },
    ],
  };

  const lighten = (color, value) =>
    ChartJS.helpers.color(color).lighten(value).rgbString();
  const topicsOption = {
    plugins: {
      autocolors: {
        mode: "data",
      },
    },
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title={"Topics Chart"}
        subtitle={"Doughnut chart for all the topics of the data"}
      />
      <Doughnut
        className="w-full h-screen"
        // options={topicsOption}
        data={topicsData}
      />
    </Box>
  );
}

export default Topics;
