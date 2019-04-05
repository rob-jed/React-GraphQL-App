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

const MainHeader = ({ customClass, children }) => (
    <header className={
        classNames(
            'main-header',
            customClass
        )
    }
    >
        { children }
    </header>
);

MainHeader.propTypes = propTypes;
MainHeader.defaultProps = defaultProps;

export default MainHeader;
