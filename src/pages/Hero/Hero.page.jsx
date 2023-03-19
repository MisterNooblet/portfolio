import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import SocialsList from '../../components/SocialsList';
import backgroundImg from './assets/hero-bg-2.jpg';

const Hero = () => {
  return (
    <Box
      component={'div'}
      sx={{
        background: `url('${backgroundImg}') center center no-repeat`,
        backgroundSize: 'cover',
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
          <Typography
            component={'p'}
            variant={'p'}
            textAlign="center"
            margin={'2rem 0'}
          >
            I am a Fullstack Developer.
            <br /> This page is about what i like and who i am..
          </Typography>
          <SocialsList />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
