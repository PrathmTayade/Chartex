import { Box } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { useGetInsighsQuery } from "../../redux/apis/api";

const Insights = () => {
  const [filters, setFilters] = useState({
    endYear: "",
    topics: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  const { data, isLoading, error, isError } = useGetInsighsQuery({
    sector: "Energy",
  });

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };
  console.log(data);

  const rows = data ?? [];

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "end_year", headerName: "End Year", width: 130 },
    { field: "sector", headerName: "Sector", width: 130 },
    { field: "topic", headerName: "Topic", width: 130 },
    { field: "insight", headerName: "Insight", width: 130 },
    { field: "region", headerName: "Region", width: 130 },
    { field: "country", headerName: "Country", width: 130 },
    { field: "pestle", headerName: "PESTLE", width: 130 },
    { field: "source", headerName: "Source", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div style={{ height: 500, width: "100%" }}>
      <Box m="1.5rem 2.5rem">
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          pagination
          paginationMode="server"
          loading={isLoading}
          error={isError}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
};

const GridToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
};
export default Insights;
