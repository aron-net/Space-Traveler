import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchAllRockets());
  }, []);

  const list = rockets.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      reservaton={rocket.reservation}
      name={rocket.name}
      description={rocket.description}
      imgUrl={rocket.imgUrl}
    />
  ));

  return (
    <>
      {list}
    </>
  );
};

export default RocketList;
