import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Topics", "Sectors"],
  endpoints: (build) => ({
    getTopics: build.query({
      query: () => "data/topics",
      providesTags: ["Topics"],
    }),
    getSectors: build.query({
      query: () => "data/sectors",
      providesTags: ["Sectors"],
    }),
    getRegions: build.query({
      query: () => "data/regions",
    }),
    getInsights: build.query({
      query: (params) => `/insights?${params}`,
    }),
    getInensity: build.query({
      query: () => "data/intensity",
    }),
  }),
});

export const {
  useGetTopicsQuery,
  useGetSectorsQuery,
  useGetInsightsQuery,
  useGetRegionsQuery,
  useGetInensityQuery,
} = api;
