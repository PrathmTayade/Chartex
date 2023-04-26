import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/ui/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
import Providers from "./components/Providers";

function App() {
  return (
    <Provider store={store}>
      <Providers>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Providers>
    </Provider>
  );
}

export default App;
