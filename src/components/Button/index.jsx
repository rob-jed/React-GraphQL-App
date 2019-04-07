import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from 'services/Styles';

const propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    customClass: PropTypes.string,
};

const defaultProps = {
    customClass: '',
};

const Button = ({ text, onClick, customClass }) => (
    <button
        type="button"
        onClick={onClick}
        className={
            classNames(
                'btn',
                customClass,
            )
        }
    >
        { text }
    </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
