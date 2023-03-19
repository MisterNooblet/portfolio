import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import backgroundImg from './assets/hero-bg-2.jpg';
const Hero = () => {
  return (
    <Box
      component={'section'}
      sx={{
        background: `url('${backgroundImg}') center center/cover no-repeat`,
        flexGrow: 1,
      }}
    >
      <Container>
        <Box
          component={'div'}
          sx={{
            color: 'text.primary',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            component={'h1'}
            variant="h2"
            fontWeight={700}
            sx={{ fontSize: '8vmin' }}
          >
            Hi, I am{' '}
            <Box component={'span'} sx={{ color: 'text.secondary' }}>
              Artyom Ribakov
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
