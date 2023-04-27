import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  DataGrid,
  GridToolbar,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useGetInsightsQuery } from "../../redux/apis/api";

const columns = [
  { field: "_id", headerName: "ID", flex: 1 },
  { field: "sector", headerName: "Sector", flex: 1 },
  { field: "topic", headerName: "Topic", flex: 1 },
  { field: "pestle", headerName: "Pest", flex: 1 },
  { field: "region", headerName: "Region", flex: 1 },
  { field: "country", headerName: "Country", flex: 1 },
  { field: "end_year", headerName: "End Year", flex: 1 },
  { field: "intensity", headerName: "Intensity", flex: 1 },
  { field: "start_year", headerName: "Start Year", flex: 1 },
];

const InsightsTable = () => {
  const [filterModel, setFilterModel] = useState({});
  const { data = [], isLoading } = useGetInsightsQuery();
  const insightsQuery = useGetInsighsQuery();
  const insights = insightsQuery.data?.data || [];

  const handleFilterChange = (params) => {
    setFilterModel(params.filterModel);
  };

  const filteredInsights = insights.filter((insight) => {
    // Filter by end year
    if (filterModel["end_year"]?.value) {
      if (insight.end_year !== filterModel["end_year"].value) {
        return false;
      }
    }

    // Filter by topic
    if (filterModel["topic"]?.value) {
      if (
        insight.topic.toLowerCase() !== filterModel["topic"].value.toLowerCase()
      ) {
        return false;
      }
    }

    // Filter by sector
    if (filterModel["sector"]?.value) {
      if (
        insight.sector.toLowerCase() !==
        filterModel["sector"].value.toLowerCase()
      ) {
        return false;
      }
    }

    // Add more filters here...

    return true;
  });

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={data}
        getRowId={(row) => row._id}
        loading={isLoading}
        pagination
        
       
      />
    </div>
  );
};

export default InsightsTable;
