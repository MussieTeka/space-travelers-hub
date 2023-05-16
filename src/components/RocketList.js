import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Rocket.module.scss';

const RocketList = ({ name, image, description }) => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <img src={image} alt={name} />
    </div>
    <div className={styles.infoHolder}>
      <h3 style={{ paddingBottom: '10px' }}>{name}</h3>
      <p style={{ paddingBottom: '10px' }}>{description}</p>
      <button
        type="button"
        className={styles.notReserved}
      >
        Reserve Rocket
      </button>
    </div>
  </div>
);

RocketList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketList;
