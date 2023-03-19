import { List, ListItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs';
const SocialsList = () => {
  return (
    <List sx={{ display: 'flex', fontSize: '2rem', color: 'white' }}>
      <ListItem>
        <Link
          to={'https://github.com/MisterNooblet/appleseeds'}
          target={'_blank'}
          color={'white'}
        >
          <BsGithub />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          to={'https://www.linkedin.com/in/artyom-ribakov-590903257/'}
          target={'_blank'}
        >
          <BsLinkedin />
        </Link>
      </ListItem>
      <ListItem>
        <Link to={'https://www.facebook.com/artyom.ribakov/'} target={'_blank'}>
          <BsFacebook />
        </Link>
      </ListItem>
      <ListItem>
        <Link to={'https://www.instagram.com/viper_moto'} target={'_blank'}>
          <BsInstagram />
        </Link>
      </ListItem>
    </List>
  );
};

export default SocialsList;
