import React, { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeStateMission } from '../../redux/missions/missions';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Card from '../UI/Card';

const Mission = (props) => {
  const {
    id, reservation, name, description,
  } = props;
  const dispatch = useDispatch();
  const onButtonPressedMission = (e) => {
    dispatch(changeStateMission(e.target.id));
  };

  return (
    <Card>
      <div>
        <h2>Mission</h2>
        <h2>Description</h2>
        <h2>Status</h2>
        <span> </span>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Badge
          text={`${reservation ? 'Active member' : 'Not a Member'}`}
          secondClass={`${reservation ? '' : 'hidden'}`}
        />
        <Button
          id={id}
          secondClasses={`${reservation ? '' : ''} `}
          text={reservation ? 'Leave mission' : 'Join Mission'}
          handleClick={onButtonPressedMission}
          type="button"
        />
      </div>
    </Card>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  reservation: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
