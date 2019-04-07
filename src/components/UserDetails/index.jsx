import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
};

const defaultProps = {
    name: '',
    company: '',
    location: '',
    bio: '',
};

const UserDetails = ({
    name, login, company, location, bio
}) => (
    <div className="user-details">
        {
            name
                && (
                    <h3>
                        Name: &nbsp;
                        <span>{ name }</span>
                    </h3>
                )
        }

        <h3>
            Login: &nbsp;
            <span>{ login }</span>
        </h3>

        {
            company
                && (
                    <h3>
                        Company: &nbsp;
                        <span>{ company }</span>
                    </h3>
                )
        }

        {
            location
                && (
                    <h3>
                        Location: &nbsp;
                        <span>{ location }</span>
                    </h3>
                )
        }

        {
            bio
                && (
                    <p>
                        { bio }
                    </p>
                )
        }
    </div>
);

UserDetails.propTypes = propTypes;
UserDetails.defaultProps = defaultProps;

export default UserDetails;
