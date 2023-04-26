import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width={"100%"}
      height={"100%"}
    >
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
