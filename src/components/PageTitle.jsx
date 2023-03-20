import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import navLinks from '../pages/utils/navLinks';
const PageTitle = () => {
  let location = useLocation();
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    const index = navLinks.findIndex((item) => item.path === location.pathname);
    if (navLinks[index].title) {
      setTitle(navLinks[index].title);
      setSubTitle(navLinks[index].subTitle);
    }
  }, [location]);
  return (
    <Box
      component={'div'}
      sx={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        mb: 5,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: '700',
          color: 'text.secondary',
          zIndex: '2',
          position: 'relative',
          '::after': {
            content: '""',
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: '4rem',
            borderBottom: '#103c6b 2px solid',
          },
          '::before': {
            content: '""',
            top: '0',
            left: '20%',
            position: 'absolute',
            width: '60%',
            height: '4rem',
            borderBottom: '#3cb35b 2px solid',
            zIndex: '5',
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          position: 'absolute',
          opacity: '0.05',
          color: 'white',
          fontWeight: '700',
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;
