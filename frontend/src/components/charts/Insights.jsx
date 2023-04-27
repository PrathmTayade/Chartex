import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../ui/Header";
import { useGetInsightsQuery } from "../../redux/apis/api";

const Insights = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  const { data, isLoading } = useGetInsightsQuery();

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "sector", headerName: "Sector", flex: 1 },
    { field: "topic", headerName: "Topic", flex: 1 },
    { field: "pestle", headerName: "Pest", flex: 1 },
    { field: "source", headerName: "Source", flex: 1 },
    { field: "region", headerName: "Region", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "end_year", headerName: "End Year", flex: 1 },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Insights" subtitle="Insight of all the Data" />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          pagination
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Insights;