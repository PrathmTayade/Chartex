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
import { Line } from "react-chartjs-2";
import { useGetInensityQuery } from "../../redux/apis/api";
import { useTheme } from "@mui/material";

ChartJS.register(
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);
const IntensityLineChart = ({ onDashBoard }) => {
  const theme = useTheme();
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
      labels: {
        color: theme.palette.primary[100],
      },
    },
  };

  return (
    <>
      {!onDashBoard && (
        <Header
          title={"Line chart for Energy sector"}
          subtitle={
            "Line chart for Energy sector and its intesity for end_year"
          }
        />
      )}
      <Line data={chartData} options={options} />
    </>
  );
};

export default IntensityLineChart;
