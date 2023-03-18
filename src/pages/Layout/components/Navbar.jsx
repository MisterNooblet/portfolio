import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/logo192.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsTelephoneOutbound } from 'react-icons/bs';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
  },
  {
    name: 'Hobbies',
    path: '/hobbies',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ backgroundColor: 'black' }}>
          <Box
            component={'img'}
            src={logo}
            alt={'logo'}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '3rem' }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARTYOM RIBAKOV
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {navLinks.map((link) => (
                <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                  <NavLink to={link.path}>
                    <Typography textAlign="center">{link.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARTYOM RIBAKOV
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {navLinks.map((link) => (
              <NavLink to={link.path}>
                <Button
                  key={link.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {link.name}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Call me">
              <Box component={'a'} href={'tel:0546477125'}>
                <IconButton sx={{ p: 0, color: 'white' }}>
                  <BsTelephoneOutbound />
                  <Typography sx={{ ml: 1 }}>054-6477125</Typography>
                </IconButton>
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
