import React from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const rocket = useSelector((state) => state.rockets);

  return (
    <div>
      {rocket.isLoading ? (
        <h3 style={{ textAlign: 'center' }}>Loading...</h3>
      ) : (
        <div>
          <h2>Rocket Setup</h2>
          <p>This is the rocket setup.</p>
        </div>
      )}
    </div>
  );
};

export default Rocket;
