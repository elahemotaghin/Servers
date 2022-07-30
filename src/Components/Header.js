import React from "react"
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const pages = [
    {name: 'خانه' , href: '/', key: 'home'},
    {name: 'سرورها' , href: '/servers', key: 'servers'}
]
const settings = ['پروفایل', 'حساب کاربری', 'داشبورد', 'خروج'];

const Header = (props) =>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawerWidth] = React.useState(props.drawerWidth);

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return(
        <AppBar position="fixed" elevation={0}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={(event) => setAnchorElNav(event.currentTarget)}
                        color="primary"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        {pages.map((page, index) => (
                            <MenuItem key={index} onClick={handleCloseNavMenu} component={Link} to={page.href}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, index) => (
                    <Button
                        key={index}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#3a3a3a' }}
                        component={Link} to={page.href}
                        
                    >
                        {page.name}
                    </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                <IconButton aria-label="delete" sx={{marginLeft: 2}}>
                    <NotificationsNoneIcon  />
                </IconButton>
                    <Tooltip title="پروفایل">
                    <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;