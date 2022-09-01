import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMission } from '../../redux/missions/missions';
import Mission from './Missions';
import './missions.css';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) dispatch(fetchAllMission());
  }, []);
  const listMission = missions.map((mission) => (
    <Mission
      key={mission.mission_id}
      id={mission.mission_id}
      name={mission.mission_name}
      description={mission.description}
    />
  ));
  return (
    <div className="missions-container">
      <div className="mission-titles">
        <h2>Mission</h2>
        <h2>Description</h2>
        <h2>Status</h2>
        <span> </span>
      </div>
      <div className="missionItems">
        {listMission}
      </div>

    </div>
  );
};

export default MissionList;
