import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard';

const propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
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
