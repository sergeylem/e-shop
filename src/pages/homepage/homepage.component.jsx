import React from 'react';

import '../homepage/homepage.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import { Z_DEFAULT_COMPRESSION } from 'zlib';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
);

export default HomePage;
