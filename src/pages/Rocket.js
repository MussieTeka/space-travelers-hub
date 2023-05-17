import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';
import styles from '../styles/components/Rocket.module.scss';

const Rocket = () => {
  const rocket = useSelector((state) => state.rockets);

  return (
    <div>
      {rocket.isLoading ? (
        <span className={styles.loading} />
      ) : (
        <RocketItem />
      )}
    </div>
  );
};

export default Rocket;
