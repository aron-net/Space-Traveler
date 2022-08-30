import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMission } from '../../redux/missions/missions';
import Mission from './Missions';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) dispatch(fetchAllMission());
  }, []);
  const listMission = missions.map((mission) => (
    <Mission
      key={mission.id}
      id={mission.id}
      name={mission.name}
      description={mission.description}
    />
  ));
  return (
    <>
      {listMission}
    </>
  );
};

export default MissionList;
