import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './../../components/HeaderBar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderBar />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;