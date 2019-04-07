import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import PrimaryLayout from 'components/PrimaryLayout';
import Spinner from 'components/Spinner';
import ErrorMessage from 'components/ErrorMessage';

import { GetUserDetails } from 'services/Queries';

import UserProfile from './components/UserProfile';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            userLogin: PropTypes.string,
        })
    }).isRequired,
};

const User = ({
    match: {
        params: {
            userLogin,
        }
    }
}) => (
    <PrimaryLayout>
        <Query query={GetUserDetails} variables={{ login: userLogin }}>
            {
                ({ loading, error, data }) => {
                    if (loading) {
                        return <Spinner />;
                    }

                    if (error || typeof data === 'undefined') {
                        return <ErrorMessage />;
                    }

                    return <UserProfile user={{ ...data.user, login: userLogin }} />;
                }
            }
        </Query>
    </PrimaryLayout>
);

User.propTypes = propTypes;

export default User;
