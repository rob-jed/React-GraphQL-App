import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
    message: PropTypes.string,
};

const defaultProps = {
    message: 'Ops, something went wrong. Try again later.'
};

const ErrorMessage = ({ message }) => (
    <h2 className="error-message">
        { message }
    </h2>
);

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;

export default ErrorMessage;
