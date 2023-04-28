// IntensityLineChart.js
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Header from "../ui/Header";
import React from "react";
import { Line } from "react-chartjs-2";
import { useGetInensityQuery } from "../../redux/apis/api";

ChartJS.register(
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);
const IntensityLineChart = () => {
  const { data = [], isLoading, error } = useGetInensityQuery();
  if (isLoading) return "Loading...";
  if (error) return `Error: ${error}`;

  const chartData = {
    labels: data.map((i) => i.year),
    datasets: [
      {
        label: "Intensity",
        data: data.map((d) => d.intensity),
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
  };

  return (
    <Box p="1.5rem 2.5rem">
      <Header
        title={"Line chart"}
        subtitle={"Line chart for Eenrgy sector and its intesity for end_year"}
      />
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default IntensityLineChart;
