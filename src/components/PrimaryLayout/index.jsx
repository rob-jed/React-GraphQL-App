import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from 'services/Styles';

const propTypes = {
    customClass: PropTypes.string,
    children: PropTypes.node,
};

const defaultProps = {
    customClass: '',
    children: null,
};

const PrimaryLayout = ({ customClass, children }) => (
    <div className={
        classNames(
            'app-inner',
            customClass,
        )}
    >
        {children}
    </div>
);

PrimaryLayout.propTypes = propTypes;
PrimaryLayout.defaultProps = defaultProps;

export default PrimaryLayout;
