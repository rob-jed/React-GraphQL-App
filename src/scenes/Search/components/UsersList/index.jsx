import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard';

import './styles.scss';

const propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.shape({
                login: PropTypes.string,
                avatarUrl: PropTypes.string,
                name: PropTypes.string,
                company: PropTypes.string,
                location: PropTypes.string,
            })
        })
    ).isRequired,
};

const UsersList = ({ users }) => (
    <ul className="search-users-list">
        {
            users.map(user => (
                <UserCard
                    key={user.node.login}
                    user={user.node}
                />
            ))
        }
    </ul>
);

UsersList.propTypes = propTypes;

export default UsersList;
