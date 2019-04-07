import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import UserRepositoryCard from '../UserRepositoryCard';

import './styles.scss';

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

const UserRepositoriesList = ({ repositories }) => {
    const [visibleItems, setVisibleItems] = useState(10);

    const handleViewMore = useCallback(() => {
        setVisibleItems(visibleItems + 10);
    }, [visibleItems]);

    const handleViewAll = useCallback(() => {
        setVisibleItems(repositories.length);
    }, []);

    const currentRepositories = visibleItems === repositories.length
        ? repositories
        : repositories.slice(0, visibleItems);

    return (
        <div className="user-repositories">
            <h2>User repositories:</h2>
            <ul className="user-repositories-list">
                {
                    currentRepositories.map(repository => (
                        <UserRepositoryCard key={repository.id} repository={repository} />
                    ))
                }
            </ul>

            {
                visibleItems < repositories.length
                    && (
                        <div className="user-repositories-pagination">
                            <Button text="View more" onClick={handleViewMore} />

                            <Button text="View all" onClick={handleViewAll} />
                        </div>
                    )
            }
        </div>
    );
};

UserRepositoriesList.propTypes = propTypes;

export default UserRepositoriesList;
