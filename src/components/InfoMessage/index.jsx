import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
    message: PropTypes.string.isRequired,
};

const ErrorMessage = ({ message }) => (
    <h2 className="info-message">
        { message }
    </h2>
);

ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
