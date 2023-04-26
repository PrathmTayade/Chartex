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

ChartJS.register(ArcElement, Tooltip, Legend, autocolors);

function Topics() {
  const { data, error, isLoading } = useGetTopicsQuery();

  if (isLoading) {
    return <div>Loading data from database</div>;
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
    <div className="">
      <div className="text-center text-2xl">Topics Chart</div>
      <Doughnut
        className="w-full h-screen"
        options={topicsOption}
        data={topicsData}
      />
    </div>
  );
}

export default Topics;
