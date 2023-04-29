import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetTopicsQuery } from "../../redux/apis/api";
import { useTheme } from "@mui/material";
import Header from "../ui/Header";
import randomColors from "randomcolor";

ChartJS.register(ArcElement, Tooltip, Legend);

function Topics() {
  const { data, error, isLoading } = useGetTopicsQuery();
  const theme = useTheme();

  if (isLoading) {
    return <div className="text-center ">Loading data from database</div>;
  }

  if (error) {
    return <div>Error getting data</div>;
  }
  const colour = randomColors({ count: data.length });

  const topicsData = {
    labels: data.map((t) => t._id),

    datasets: [
      {
        label: "No.sectors:",
        data: data.map((t) => t.count),
        backgroundColor: colour,
      },
    ],
  };

  return (
    <>
      <Header
        title={"Topics Chart"}
        subtitle={"Doughnut chart for all the topics of the data"}
      />
      <Doughnut
        className="w-full "
        data={topicsData}
        options={{
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: theme.palette.primary[100],
              },
            },
          },
        }}
      />
    </>
  );
}

export default Topics;
