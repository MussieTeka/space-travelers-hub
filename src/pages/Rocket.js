import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';
import styles from '../styles/components/Rocket.module.scss'

const Rocket = () => {
  const rocket = useSelector((state) => state.rockets);

  return (
    <div>
      {rocket.isLoading ? (
        <h3 className={styles.loading}></h3>
      ) : (
        <RocketItem />
      )}
    </div>
  );
};

export default Rocket;
