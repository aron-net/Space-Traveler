import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeState } from '../../redux/rockets/rockets';
import Button from '../Button/Button';
import Card from '../UI/Card';
import Badge from '../Badge/Badge';
import './Rocket.css';

const Rocket = (props) => {
  const {
    id, reservaton, name, description, imgUrl,
  } = props;
  const dispatch = useDispatch();
  const onButtonPressed = (event) => {
    dispatch(changeState(event.target.id));
  };

  return (
    <Card className="rocket-container">
      <div className="rocket-image">
        <img src={imgUrl} alt="rocket-img" />
      </div>
      <div className="rocket-info">
        <h2 className="rocket-name">{name}</h2>
        <div className="rocket-reservation">
          <Badge secondClasses={reservaton ? 'ar' : 'hidden'} text="Reserved" />
          {description}
        </div>
        <Button
          id={id}
          secondClasses={`${reservaton ? '' : ''} `}
          text={reservaton ? 'Cancel Reservation' : 'Reserve Rocket'}
          handleClick={onButtonPressed}
          type="button"
        />
      </div>
    </Card>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  reservaton: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Rocket;
