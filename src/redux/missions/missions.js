import fetchMission from '../API/MissionApi';

const SUCCESS = 'SPACE-TRAVELERS/rockets/SUCCESSFUL';
const FAILED = 'SPACE-TRAVELERS/rockets/FAILED';
const RESERVATION = 'SPACE-TRAVELERS/rockets/RESERVATION';

export const fetchAllMission = () => (dispatch) => {
  fetchMission().then((res) => {
    if (res.status === 200 && res.ok) {
      res.json().then((data) => {
        const missionData = [];
        data.forEach((mission) => {
          missionData.push({
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
          });
        });
        dispatch(
          {
            type: SUCCESS,
            data: missionData,
          },
        );
      });
    } else {
      dispatch(
        {
          type: FAILED,
          data: [],
        },
      );
    }
  });
};

export const missionReducer = (state = [], action) => {
  switch (action.type) {
    case SUCCESS:
      return action.data;

    case RESERVATION:
      return state.map((item) => (
        item.mission_id === action.data ? { ...item, reserved: !item.reserved } : item
      ));
    default:
      return state;
  }
};

export const changeStateMission = (id) => ({
  type: RESERVATION,
  data: id,
});
