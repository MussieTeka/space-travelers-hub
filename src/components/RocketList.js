import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/components/Rocket.module.scss';
import { reserveRocket } from '../redux/rocket/rocketSlice';

const RocketList = ({
  id, name, image, description,
}) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket({ id }));
  };

  return (
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
          onClick={handleReserve}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

RocketList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketList;
