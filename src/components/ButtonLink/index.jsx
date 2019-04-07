import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { classNames } from 'services/Styles';

const propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    customClass: PropTypes.string,
};

const defaultProps = {
    customClass: '',
};

const ButtonLink = ({ url, text, customClass }) => (
    <Link
        to={url}
        className={
            classNames(
                'btn',
                'btn-link',
                customClass
            )
        }
    >
        {text}
    </Link>
);

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
