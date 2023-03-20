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
  return <div>{title}</div>;
};

export default PageTitle;
