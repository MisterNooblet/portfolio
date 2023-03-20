import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import PageWrapper from '../components/PageWrapper';

import mypfp from './assets/mypfp.png';

const myInfo = [
  { title: 'Birthday', data: '10 December 1991' },
  { title: 'Phone', data: '+972 054-6477-125' },
  { title: 'Email', data: 'vipermotomail@gmail.com' },
  { title: 'From', data: 'Herzliya, Israel' },
  { title: 'Languages', data: 'English, Hebrew, Russian' },
];

const pageText = [
  'This is ME',
  'Fullstack Developer',
  'I am currently studying in a Fullstack Developers Course',
  `AppleSeed's Bootcamp.`,
  'Focusing on HTML , CSS , JavaScript , React , and Back-end with NodeJS & mongoDB.',
];
const About = () => {
  return (
    <PageWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexGrow: 1,
          color: 'text.primary',
        }}
      >
        <Box
          component={'div'}
          sx={{
            background: `url(${mypfp}) center center no-repeat`,
            backgroundSize: 'contain',
            width: '50%',
            height: '100%',
            mr: 4,
          }}
        />
        <Box sx={{ lineHeight: 2 }}>
          <Typography variant="h5" fontWeight={700}>
            {pageText[0]}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {pageText[1]}
          </Typography>
          <Typography>
            {pageText[2]}
            <Box component={'span'} sx={{ color: 'text.secondary' }}>
              {' '}
              @
            </Box>
            {pageText[3]}
          </Typography>
          <Typography>{pageText[4]}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <List>
              {myInfo.map((item) => (
                <ListItem>{item.title}</ListItem>
              ))}
            </List>
            <List>
              {myInfo.map((item) => (
                <ListItem>{item.data}</ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default About;
