import fetchDragon from '../API/DragonApi';

const DRAGON_SUCCESS = 'SPACE-TRAVELERS/rockets/DRAGON_SUCCESSFUL';
const DRAGON_FAILED = 'SPACE-TRAVELERS/rockets/DRAGON_FAILED';
const DRAGON_RESERVATION = 'SPACE-TRAVELERS/rockets/DRAGON_RESERVATION';
export const fetchAllDragon = () => (dispatch) => {
  fetchDragon().then((res) => {
    if (res.status === 200 && res.ok) {
      res.json().then((data) => {
        const dragonData = [];
        data.forEach((dragon) => {
          dragonData.push({
            id: dragon.id,
            name: dragon.name,
            type: dragon.type,
            img: dragon.flickr_images,
            reservation: false,
          });
        });
        dispatch({
          type: DRAGON_SUCCESS,
          data: dragonData,
        });
      });
    } else {
      dispatch({
        type: DRAGON_FAILED,
        data: [],
      });
    }
  });
};
export const dragonReducer = (state = [], action) => {
  switch (action.type) {
    case DRAGON_SUCCESS:
      return action.data;
    case DRAGON_RESERVATION:
      return state.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        imgUrl: dragon.imgUrl,
        reservation:
          dragon.id === action.id ? !dragon.reservation : dragon.reservation,
      }));
    default:
      return state;
  }
};
export const changeDragon = (id) => ({
  type: DRAGON_RESERVATION,
  id,
});
