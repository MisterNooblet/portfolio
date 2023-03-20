import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { TbCircleChevronDown, TbCircleChevronUp } from 'react-icons/tb';

import navLinks from '../utils/navLinks';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#40513B',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      even: '#062444',
      odd: '#03012c',
      paper: '#9DC08B',
    },
    text: {
      primary: '#fff',
      secondary: '#3cb35b',
    },
  },
});

const Layout = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const handlePageSwitch = (direction) => {
    switch (direction) {
      case 'up':
        navigate(
          navLinks[
            navLinks.findIndex((item) => item.path === location.pathname) - 1
          ].path
        );
        break;
      case 'down':
        navigate(
          navLinks[
            navLinks.findIndex((item) => item.path === location.pathname) + 1
          ].path
        );
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar navLinks={navLinks} />
        {location.pathname !== '/' && (
          <Box
            sx={{
              position: 'fixed',
              top: '80px', // Height of the Navbar
              left: '95%',
              transform: 'translateX(-50%)',
              color: 'text.secondary',
              fontSize: { md: '5vmin', xs: '8vmin' },
              cursor: 'pointer',
              zIndex: 1, // Set a higher z-index to make it appear on top of Outlet
            }}
            onClick={() => handlePageSwitch('up')}
          >
            <TbCircleChevronUp />
          </Box>
        )}

        <Outlet />
        {location.pathname !== '/contact' && (
          <Box
            sx={{
              position: 'fixed',
              bottom: '0',
              left: '95%',
              transform: 'translateX(-50%)',
              color: 'text.secondary',
              fontSize: { md: '5vmin', xs: '8vmin' },
              cursor: 'pointer',
            }}
            onClick={() => handlePageSwitch('down')}
          >
            <TbCircleChevronDown />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
