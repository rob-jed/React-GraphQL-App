import React, { useState } from 'react';
import { Query } from 'react-apollo';

import PrimaryLayout from 'components/PrimaryLayout';
import MainHeader from 'components/MainHeader';
import ErrorMessage from 'components/ErrorMessage';
import InfoMessage from 'components/InfoMessage';
import Spinner from 'components/Spinner';
import SearchInput from 'components/SearchInput';

import { FindUsers } from 'services/Queries';

import UsersList from './components/UsersList';

import './styles.scss';

const Search = () => {
    const [searchValue, getSearchValue] = useState('');

    return (
        <PrimaryLayout>
            <MainHeader customClass="search-header">
                <SearchInput
                    name="users-search"
                    value={searchValue}
                    onChange={getSearchValue}
                    placeholder="Search GitHub users"
                />
            </MainHeader>

            {
                searchValue
                    && (
                        <Query query={FindUsers} variables={{ query: searchValue }}>
                            {
                                ({ loading, error, data }) => {
                                    if (loading) {
                                        return <Spinner />;
                                    }

                                    if (error || typeof data === 'undefined') {
                                        return <ErrorMessage />;
                                    }

                                    const { edges: users } = data.search;

                                    if (!users.length) {
                                        return <InfoMessage message="No results were found." />;
                                    }

                                    return <UsersList users={users} />;
                                }
                            }
                        </Query>
                    )
            }
        </PrimaryLayout>
    );
};

export default Search;
