import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const resumeLeft = [
  {
    title: 'Military Career Construction Unit - IDF',
    date: 'Jan 2016 - Nov 2021',
    description:
      'Career Soldier and commander at IAF Construction unit , retired as first sergeant major.',
  },
  {
    title: 'Military Career H.M.E Op - IDF',
    date: 'Jan 2015 - Jan 2016',
    description: 'Career Soldier Operating Heavy Mechanical Equipment.',
  },
  {
    title: 'Mandatory Service - IDF',
    date: 'Dec 2011 - Jan 2015',
    description: `Mandatory Service as Jet Fuel System's Technician.`,
  },
];
const resumeRight = [
  {
    title: `AppleSeed's Fullstack Bootcamp`,
    date: 'Dec 2022 - Present',
    description: `Learning to develop Website's as well as fully operational App's Front and Back end.`,
  },
  {
    title: 'Various IDF Professional Courses',
    date: 'Dec 2011 - Nov 2021',
    description: `I.A.F Cadets school, Specialization in Aviation Mechanic's`,
  },
  {
    title: 'High School - Holtz',
    date: 'Sep 2006 - Jul 2010',
    description: `I.A.F Cadets school, Specialization in Aviation Mechanic's`,
  },
];
const Resume = () => {
  return (
    <PageWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'start',
          flexGrow: 1,
          color: 'text.primary',
        }}
      >
        <List
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '5vh 0',
          }}
        >
          {resumeLeft.map((item) => {
            return (
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    height: '0.8rem',
                    width: '0.8rem',
                    top: '0',
                    left: '-2rem',
                    backgroundColor: 'darkblue',
                    borderRadius: '20%',
                    marginLeft: '2rem',
                    border: 'gray 2px solid',
                    zIndex: '2',
                    transition: 'all 1s ease-in-out',
                  },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    height: '200%',
                    width: '0.1rem',
                    top: '0',
                    left: '-2rem',
                    backgroundColor: 'gray',
                    marginLeft: '2.5rem',
                  },
                  ':hover:before': {
                    content: '""',
                    backgroundColor: '#3cb35b',
                    borderColor: '#3cb35b',
                  },
                }}
              >
                <Typography variant="p">{item.title}</Typography>
                <Typography>{item.date}</Typography>
                <Typography>{item.description}</Typography>
              </ListItem>
            );
          })}
        </List>
        <List
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '5vh 0',
          }}
        >
          {resumeRight.map((item) => {
            return (
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="p">{item.title}</Typography>
                <Typography>{item.date}</Typography>
                <Typography>{item.description}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </PageWrapper>
  );
};

export default Resume;
