import PropTypes from 'prop-types';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Dragon = (props) => {
  const {
    id, reservation, name, type, img,
  } = props;
  return (
    <Card>
      <img src={img} alt="dragon-img" />
      <div>
        <h1>{name}</h1>
        <div>{type}</div>
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
