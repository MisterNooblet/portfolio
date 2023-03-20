import { Box, Typography } from '@mui/material';
import React from 'react';
import PageWrapper from '../pages/components/PageWrapper';

const pageText = [
  'All the coding skills i have learned so far',
  'Currently i am mastering my HTML ,CSS , and JavaScript skills by developing various websites and applications as part of the course',
];

const Skills = () => {
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
        <Box>
          <Typography>{pageText[0]}</Typography>
          <Typography>{pageText[1]}</Typography>
        </Box>
        <Box></Box>
      </Box>
    </PageWrapper>
  );
};

export default Skills;
