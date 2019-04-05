import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    customClass: PropTypes.string,
    children: PropTypes.node,
};

const defaultProps = {
    customClass: '',
    children: null,
};

const PrimaryLayout = ({ customClass, children }) => {
    const classList = ['app-inner'];

    if (customClass) {
        classList.push(customClass);
    }

    return (
        <div className={classList.join(' ')}>
            {children}
        </div>
    );
};

PrimaryLayout.propTypes = propTypes;
PrimaryLayout.defaultProps = defaultProps;

export default PrimaryLayout;
