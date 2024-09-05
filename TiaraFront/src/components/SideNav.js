import React from "react";
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Container, Box, Collapse} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TodayIcon from '@mui/icons-material/Today';
import FavoriteIcon from '@mui/icons-material/Favorite';

const drawerWidth = 240;


const SideNav = () => {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
    return(
        <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }, }}>
                <Toolbar />
                <Toolbar/>
                <List>
                <Box sx={{ paddingLeft: 2, paddingRight: 2}}>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <WorkIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Orders"/>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </Box>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{pl:4}}>
                <ListItemText primary="All Orders"/>
                </ListItemButton>
                <ListItemButton sx={{pl:4}}>
                <ListItemText primary="Active"/>
                </ListItemButton>
                <ListItemButton sx={{pl:4}}>
                <ListItemText primary="Completed"/>
                </ListItemButton>
                <ListItemButton sx={{pl:4}}>
                <ListItemText primary="Incomplete"/>
                </ListItemButton>
                </List>
                </Collapse>
                <Box sx={{ paddingLeft: 2, paddingRight: 2}}>
                <ListItemButton>
                    <ListItemIcon>
                        <TodayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar View" />
                </ListItemButton>
                </Box>
                <Box sx={{pl: 2, pr: 2}}>
                <ListItemButton>
                    <ListItemIcon>
                        <FavoriteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Favorites" />
                </ListItemButton>
                </Box>
                </List>
        </Drawer>
    )
}

export default SideNav;