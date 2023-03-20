import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import navLinks from '../utils/navLinks';

const PageWrapper = ({ children }) => {
  let location = useLocation();
  const [pageEven, setPageEven] = useState(false);
  useEffect(() => {
    if (
      navLinks.findIndex((item) => item.path === location.pathname) % 2 ===
      0
    ) {
      setPageEven(true);
    } else {
      setPageEven(false);
    }
  }, [location]);

  return (
    <>
      <Box
        component={'div'}
        sx={{
          backgroundColor: pageEven ? 'background.odd' : 'background.even',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </Container>
      </Box>
    </>
  );
};

export default PageWrapper;
