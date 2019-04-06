import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

const defaultProps = {
    alt: 'Avatar',
};

const Avatar = ({ url, alt }) => (
    <div className="avatar">
        <img src={url} alt={alt} />
    </div>
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
