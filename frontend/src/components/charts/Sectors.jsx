import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useGetSectorsQuery } from "../../redux/apis/api";
import Header from "../ui/Header";

ChartJS.register(ArcElement, Tooltip, Legend);

function Sectors({ onDashBoard }) {
  const { data, error, isLoading } = useGetSectorsQuery();

  if (isLoading) {
    return <div>Loading data from database</div>;
  }

  if (error) {
    return <div>Error getting data</div>;
  }

  const chartData = {
    labels: data.map((sector) => sector.sector),
    datasets: [
      {
        label: "Sectors",
        data: data.map((sector) => sector.count),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#5eff5e",
          "#fefe5e",
        ],
      },
    ],
  };
  return (
    <>
      {!onDashBoard && (
        <Header
          title={"Sectors Chart"}
          subtitle={"Pie chart for all the sectors of the data"}
        />
      )}
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
}

export default Sectors;
