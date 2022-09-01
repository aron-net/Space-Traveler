import PropTypes from 'prop-types';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Dragon = (props) => {
  const {
    id, reservation, name, type, img,
  } = props;
  return (
    <Card className="dragonsContainer">
      <div className="dragonImg">
        <img src={img} alt="dragon-img" />
      </div>
      <div className="dragonDescription">
        <h1 className="dragonName">{name}</h1>
        <div className="dragonType">{type}</div>
        <Button
          id={id}
          secondClasses={`${reservation ? '' : ''}`}
          text={reservation ? 'Cancel Reservation' : 'Reserve Dragon'}
          type="button"
        />
      </div>
    </Card>
  );
};
Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  reservation: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Dragon;
