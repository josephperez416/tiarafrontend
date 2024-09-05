import React from "react";
import { Box, Breadcrumbs, Container, Link, Toolbar} from "@mui/material";
import Footer from "../components/Footer";
import HeaderBar from "../components/Header";
import SideNav from "../components/SideNav";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

const drawerWidth = 240;

const ClientDashboard = () => {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderBar/>
            <SideNav/>
            <Box sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
            <Toolbar/>
            <Container>
            <Box>
            <Box>
            <Breadcrumbs>
                <Link underline="hover" color="inherit" href="/ClientDashboard" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                </Link>
                <Link underline="hover" color="inherit" href="/ClientDashboard/Orders" sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                    Orders
                </Link>
            </Breadcrumbs>
            </Box>
            </Box>
            </Container>
            </Box>
            <Footer/>
        </Box>
);
};

export default ClientDashboard;