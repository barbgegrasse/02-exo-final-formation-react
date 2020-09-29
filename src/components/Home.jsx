import PropTypes from 'prop-types';
import React from 'react';
import BarList from './bar/BarList';
import * as Sentry from '@sentry/browser';

const Home = ({ bars }) => {
  const handleClick = () => {
    try {
      throw new Error('Caught');
    } catch (err) {
      console.error(err);

      Sentry.captureException(err);
    }
  };

  return (
    <div>
      <h1 className='primary-title'>Les bars de Toulouse</h1>
      <button onClick={handleClick}>Error</button>
      <BarList bars={bars} />
    </div>
  );
};

Home.propTypes = {
  bars: PropTypes.array,
};

export default Home;
