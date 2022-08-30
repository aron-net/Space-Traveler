import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ ...props }) {
    return (
        <div
            data-testid="badge"
            className={`${props.secondClasses}`}
        >
            {props.text}
        </div>
    );
}

Badge.defaultProps = {
    secondClasses: '',
    text: '',
};

Badge.propTypes = {
    text: PropTypes.string,
    secondClasses: PropTypes.string,
};