import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeState } from '../../redux/rockets/rockets';
import Button from '../Button/Button'
import Card from '../UI/Card';
import Badge from '../Badge/Badge';

const Rocket = (props) => {
    const { id, reservaton, name, description, imgUrl, } = props;
    const dispatch = useDispatch();
    const onButtonPressed = (event) => {
        dispatch(changeState(event.target.id));
    };

    return (
        <Card>
            <img src={imgUrl} alt="rocket-img" />
            <div>
                <h1>{name}</h1>
                <div>
                <Badge secondClasses={reservaton ? "" : "hidden"} text="Reserved" />
                    {description}
                </div>
                <Button
                    id={id}
                    secondClasses={`${reservaton ? '' : ''} `}
                    text={reservaton ? 'Cancel Reservation' : 'Reserve Rocket'}
                    handleClick={onButtonPressed}
                    type="button"
                />
            </div>
        </Card>
    );
};

Rocket.propTypes = {
    id: PropTypes.string.isRequired,
    reservaton: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default Rocket;