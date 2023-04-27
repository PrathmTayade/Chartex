import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useGetInsighsQuery } from "../../redux/apis/api";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "end_year", headerName: "End Year", width: 130 },
  { field: "intensity", headerName: "Intensity", width: 130 },
  { field: "sector", headerName: "Sector", width: 130 },
  { field: "topic", headerName: "Topic", width: 130 },
  { field: "start_year", headerName: "Start Year", width: 130 },
  { field: "impact", headerName: "Impact", width: 130 },
  { field: "added", headerName: "Added", width: 200 },
  { field: "published", headerName: "Published", width: 200 },
];

const InsightsGrid = () => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState([]);

  const { data = [], isSuccess } = useGetInsighsQuery(filters);

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const handleFilterChange = (params) => {
    setFilters(params.filters);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={pageSize}
        page={page}
        rowCount={isSuccess ? data.length : undefined}
        pagination
        paginationMode="server"
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        components={{
          Toolbar: GridToolbar,
        }}
        onFilterModelChange={handleFilterChange}
      />
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

export default InsightsGrid;
