import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import Badge from '../Badge/Badge';
import { changeStateDragon } from '../../redux/dragons/dragon';

const Dragon = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <Card className="rocket-container">
      <div className="rocket-image">
        <img src={item.img} alt="rocket-img" />
      </div>
      <div className="rocket-info">
        <h2 className="rocket-name">{item.name}</h2>
        <div className="rocket-reservation">
          <Badge secondClasses={item.reserved ? 'ar' : 'hidden'} text="capsule" />
          {item.description}
        </div>
        <button
          onClick={() => dispatch(changeStateDragon(item.id))}
          type="button"
        >
          {item.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </Card>
  );
};
Dragon.propTypes = {
  item: PropTypes.string.isRequired,
};
export default Dragon;
