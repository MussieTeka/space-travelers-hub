import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/components/Rocket.module.scss';
import { reserveRocket, cancelReserve } from '../redux/rocket/rocketSlice';

const RocketList = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  const [isReserved, setIsReserved] = useState(reserved);

  const handleReserve = () => {
    if (isReserved) {
      dispatch(cancelReserve({ id }));
      setIsReserved(false);
    } else {
      dispatch(reserveRocket({ id }));
      setIsReserved(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.infoHolder}>
        <h3 style={{ paddingBottom: '10px' }}>{name}</h3>
        {isReserved
          ? (
            <p style={{ paddingBottom: '10px' }}>
              <span className={styles.reservedBadge}>Reserved</span>
              {description}
            </p>
          )
          : <p style={{ paddingBottom: '10px' }}>{description}</p>}
        <button
          type="button"
          onClick={handleReserve}
          className={isReserved ? styles.reserved : styles.notReserved}
        >
          {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
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
  reserved: PropTypes.bool,
};

RocketList.defaultProps = {
  reserved: false,
};

export default RocketList;
