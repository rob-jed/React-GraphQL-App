import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
    onClick: PropTypes.func,
};

const defaultProps = {
    onClick: null,
};

const CloseButton = ({ onClick }) => (
    <button
        type="button"
        className="close-button"
        onClick={onClick}
    />
);

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
