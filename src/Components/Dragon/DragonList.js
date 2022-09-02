import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDragon } from '../../redux/dragons/dragon';
import Dragon from './Dragon';
import './Dragon.css';

const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (!dragons.length) dispatch(fetchAllDragon());
  });

  const list = dragons.map((item) => (
    <Dragon
      key={item.id}
      id={item.id}
      name={item.name}
      type={item.type}
      img={item.img}
      reservation={item.reservation}
    />
  ));
  return <>{list}</>;
};
export default DragonList;
