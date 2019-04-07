import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from 'components/Avatar';
import UserDetails from 'components/UserDetails';

import './styles.scss';

const propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string,
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
    }).isRequired,
};

const UserCard = ({
    user: {
        login,
        avatarUrl,
        name,
        company,
        location,
    }
}) => (
    <li className="user-card">
        <Link to={`user/${login}`} className="user-card-inner">
            <Avatar url={avatarUrl} alt={name} />

            <UserDetails
                login={login}
                name={name}
                company={company}
                location={location}
            />
        </Link>
    </li>
);

UserCard.propTypes = propTypes;

export default UserCard;
