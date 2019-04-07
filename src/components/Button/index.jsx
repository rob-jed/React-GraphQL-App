import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

const Button = ({ text, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="btn"
    >
        { text }
    </button>
);

Button.propTypes = propTypes;

export default Button;
