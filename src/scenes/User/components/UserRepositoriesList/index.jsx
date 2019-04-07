import React from 'react';
import PropTypes from 'prop-types';

import UserRepositoryCard from '../UserRepositoryCard';

const propTypes = {
    repositories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            description: PropTypes.string,
            homepageUrl: PropTypes.string,
            name: PropTypes.string,
            url: PropTypes.string,
        })
    ).isRequired,
};

const UserRepositoriesList = ({ repositories }) => (
    <div className="user-repositories">
        <h2>User repositories:</h2>
        <ul className="user-repositories-list">
            {
                repositories.map(repository => (
                    <UserRepositoryCard key={repository.id} repository={repository} />
                ))
            }
        </ul>
    </div>
);

UserRepositoriesList.propTypes = propTypes;

export default UserRepositoriesList;
