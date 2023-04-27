import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/ui/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
import Providers from "./components/Providers";
import Sectors from "./components/charts/Sectors";
import Topics from "./components/charts/Topics";
import Regions from "./components/charts/Regions";

function App() {
  return (
    <Provider store={store}>
      <Providers>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/likelyhood" element={<Topics />} />
            <Route path="/regions" element={<Regions />} />
          </Route>
        </Routes>
      </Providers>
    </Provider>
  );
}

export default App;
