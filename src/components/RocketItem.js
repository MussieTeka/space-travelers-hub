import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './RocketList';

const RocketItem = () => {
  const rockets = useSelector((state) => state.rockets.rocket);

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketList
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          image={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved || false}
        />
      ))}
    </div>
  );
};

export default RocketItem;
