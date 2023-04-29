import { useGetRegionsQuery } from "../../redux/apis/api";
import { Box, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Header from "../ui/Header";

ChartJS.register(
  Tooltip,
  Legend,
  Colors,
  BarElement,
  CategoryScale,
  LinearScale
);

const Regions = () => {
  const { data = [], error, isLoading } = useGetRegionsQuery();

  // Convert the data to a format that Chart.js can use
  const chartData = {
    labels: data.map((i) => i.region),
    datasets: [
      {
        label: "Count",
        data: data.map((region) => region.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(255, 159, 64, 0.3)",
          "rgba(255, 205, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(201, 203, 207, 0.3)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],

        borderWidth: 1,
      },
    ],
  };

  //flip the axis
  const options = {
    indexAxis: "y",
    scales: {
      y: {
        ticks: {
          precision: 0,
        },
      },
    },
  };
  if (isLoading) {
    return <div>Loading data from database</div>;
  }

  if (error) {
    return <div>Error getting data</div>;
  }
  return (
    <>
      <Header
        title={"Regions Chart"}
        subtitle={"Bar chart for all the regions of the data"}
      />
      <Bar data={chartData} options={{}} />
    </>
  );
};

export default Regions;
