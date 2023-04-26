import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/globalSlice";
import { api } from "./apis/api";
const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

export default store;
