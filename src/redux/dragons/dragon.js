import fetchDragon from '../API/DragonApi';

const DRAGON_SUCCESS = 'SPACE-TRAVELERS/rockets/DRAGON_SUCCESSFUL';
const DRAGON_FAILED = 'SPACE-TRAVELERS/rockets/DRAGON_FAILED';
const DRAGON_RESERVATION = 'SPACE-TRAVELERS/rockets/DRAGON_RESERVATION';

export const fetchAllDragon = () => (dispatch) => {
  fetchDragon().then((response) => {
    if (response.status === 200 && response.ok) {
      response.json().then((data) => {
        const dragonData = [];
        data.forEach((dragon) => {
          dragonData.push({
            id: dragon.id,
            name: dragon.name,
            type: dragon.type,
            description: dragon.description,
            img: dragon.flickr_images,
          });
        });
        dispatch(
          {
            type: DRAGON_SUCCESS,
            data: dragonData,
          },
        );
      });
    } else {
      dispatch(
        {
          type: DRAGON_FAILED,
          data: [],
        },
      );
    }
  });
};

export const dragonReducer = (state = [], action) => {
  switch (action.type) {
    case DRAGON_SUCCESS:
      return action.data;

    case DRAGON_RESERVATION:
      return state.map((item) => (
        item.id === action.data ? { ...item, reserved: !item.reserved } : item
      ));
    default:
      return state;
  }
};

export const changeStateDragon = (id) => ({
  type: DRAGON_RESERVATION,
  data: id,
});
