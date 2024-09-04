import React from 'react';
import { Box, Drawer } from "@mui/material";
import Footer from "../components/Footer";
import HeaderBar from "../components/Header";

const drawerWidth = 240;

const ClientDashboard = () => {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ zIndex: 1300 }}>
                <HeaderBar />
            </Box>
            <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }, }}>
                </Drawer>
                <Box sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
                </Box>
            <Box sx={{ zIndex: 1300 }}>
                <Footer />
            </Box>
        </Box>
);
};

export default ClientDashboard;