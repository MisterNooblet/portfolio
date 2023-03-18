import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      default: '#EDF1D6',
      paper: '#9DC08B',
    },
    text: {
      primary: '#fff',
      secondary: '#3cb35b',
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;
