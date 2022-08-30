import PropTypes from 'prop-types';

export default function Button({ ...props }) {
    return (
        <button
            id={props.id}
            className={` ${props.secondClasses}`}
            type={props.type === 'submit' ? 'submit' : 'button'}
            onClick={props.handleClick}
        >
            {props.text}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    text: '',
    handleClick: () => { },
    secondClasses: '',
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    text: PropTypes.string,
    secondClasses: PropTypes.string,
    handleClick: PropTypes.func,
};