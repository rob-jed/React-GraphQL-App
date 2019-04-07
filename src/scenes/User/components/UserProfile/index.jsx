import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'components/Avatar';
import UserDetails from 'components/UserDetails';

import UserRepositoriesList from '../UserRepositoriesList';

import './styles.scss';

const propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string,
        avatarUrl: PropTypes.string,
        bio: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
        name: PropTypes.string,
        respositories: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
                description: PropTypes.string,
                homepageUrl: PropTypes.string,
                name: PropTypes.string,
                url: PropTypes.string,
            })),
        }),
    }).isRequired,
};

const UserProfile = ({
    user: {
        login,
        avatarUrl,
        bio,
        company,
        location,
        name,
        repositories,
    }
}) => (
    <div className="user-profile">
        <Avatar url={avatarUrl} alt={login} />

        <UserDetails
            login={login}
            name={name}
            company={company}
            location={location}
            bio={bio}
        />

        {
            repositories.nodes.length > 0
                && (
                    <UserRepositoriesList repositories={repositories.nodes} />
                )
        }
    </div>
);

UserProfile.propTypes = propTypes;

export default UserProfile;
