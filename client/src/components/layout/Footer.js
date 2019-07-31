import React from 'react';

import Copyright from '../partials/Copyright';
import Social from '../partials/Social';

const Footer = () => {
  return (
    <div className='bg-dark text-white text-center'>
      <Social />
      <Copyright />
    </div>
  );
};

export default Footer;
