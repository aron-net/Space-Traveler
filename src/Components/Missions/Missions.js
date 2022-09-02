import React, { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeStateMission } from '../../redux/missions/missions';
import Card from '../UI/Card';

const Mission = (props) => {
  const {
    mission,
  } = props;
  console.log(props);
  const dispatch = useDispatch();
  return (
    <Card>
      <div className="missionName">
        <h3>{mission.mission_name}</h3>
      </div>
      <div className="missionInfor">
        <p>{mission.description}</p>
      </div>
      <div className="missionStatus">
        { mission.reserved && (<span style={{ backgound: 'teal' }}>Active member</span>)}
        { !mission.reserved && <span>NOT A MEMBER</span>}
      </div>
      <div className="missionBtn">
        <button
          onClick={() => dispatch(changeStateMission(mission.mission_id))}
          type="button"
        >
          {mission.reserved ? 'Leave mission' : 'Join Mission'}
        </button>
      </div>
    </Card>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
