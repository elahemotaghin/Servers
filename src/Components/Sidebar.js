import React from "react";
import {Link} from 'react-router-dom';

import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home'
import PolicyIcon from '@mui/icons-material/Policy';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

const menu = [
                {name: 'داشبورد',
                 icon: <HomeIcon fontSize="small" color="gray"/>,
                 href: '/'
                },
                {name: 'سرورهای اختصاصی',
                 icon: <DisplaySettingsIcon fontSize="small" color="primary"/>,
                color: 'primary.main',
                border: '3px solid',
                href: '/servers'},
                {name: 'ماشین های ابری', 
                icon: <WbCloudyIcon fontSize="small" color="gray"/>,
                href: '#'},
                {name: 'قوانین', 
                icon: <PolicyIcon fontSize="small" color="gray"/>,
                href: '#'}]

const SideBar = (props) =>{
    const drawerWidth = props.drawerWidth;
    return(
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="right"
        >
            <Box sx={{ display: { display: 'flex', justifyContent: 'center', alignItems: 'center'}, pt: 2 }} >
                <AdbIcon fontSize= 'large' color='primary'/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    ml: 2,
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    پلتفرم ابری سکو
                </Typography>
            </Box>
            <Toolbar variant="dense"/>
            <List>
            {menu.map((item) => (
                <ListItem key={item.name} sx={{borderRight: item?.border, borderColor: item?.color}}>
                    <ListItemButton component={Link} to={item.href}>
                        {item.icon}
                        <ListItemText primary={item.name} sx={{display: 'flex', marginRight: 2, color: item?.color}}/>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
      </Drawer>
    );
}
export default SideBar;