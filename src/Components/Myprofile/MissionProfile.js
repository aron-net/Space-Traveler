import { useSelector } from 'react-redux';

function MissionProfile() {
  const missionProfile = useSelector((state) => state.missions);
  const missions = missionProfile;
  const missionsReserved = missions.filter((data) => data.reserved === true);
  let missionCounter = 0;
  missions.map((data) => {
    if (data.reserved) {
      missionCounter += 1;
    }
    return missionCounter;
  });
  return (
    <section>
      <h1> My Missions </h1>
      <ul>
        {missionCounter > 0 ? (
          missionsReserved.map((data) => (
            <li key={data.id}>
              {data.mission_name}
            </li>
          ))
        ) : (
          <li
            style={{ border: 'none', color: 'green' }}
          >
            Reserved Missions Currently(0)
          </li>
        )}
      </ul>
    </section>
  );
}
export default MissionProfile;
