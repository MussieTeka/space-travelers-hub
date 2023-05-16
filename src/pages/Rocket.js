import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';

const Rocket = () => {
  const rocket = useSelector((state) => state.rockets);

  return (
    <div>
      {rocket.isLoading ? (
        <h3 style={{ textAlign: 'center' }}>Loading...</h3>
      ) : (
        <RocketItem />
      )}
    </div>
  );
};

export default Rocket;
