import React from "react";
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
  const theme = useTheme();

  ChartJS.defaults.backgroundColor = "#9BD0F5";
  ChartJS.defaults.borderColor = theme.palette.grey[300];
  ChartJS.defaults.color = theme.palette.secondary[100];
  const { data = [], error, isLoading } = useGetRegionsQuery();
  console.log(data);

  // Convert the data to a format that Chart.js can use
  const chartData = {
    labels: data.map((i) => i.region),
    datasets: [
      {
        label: "Count",
        data: data.map((region) => region.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
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
    <Box m="1.5rem 2.5rem">
      <Header
        title={"Regions Chart"}
        subtitle={"Bar chart for all the regions of the data"}
      />
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default Regions;
