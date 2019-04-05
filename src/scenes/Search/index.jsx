import React from 'react';

import PrimaryLayout from 'components/PrimaryLayout';
import MainHeader from 'components/MainHeader';
import SearchInput from 'components/SearchInput';

import './styles.scss';

const Search = () => (
    <PrimaryLayout>
        <MainHeader customClass="search-header">
            <SearchInput
                name="users-search"
                placeholder="Search GitHub users"
            />
        </MainHeader>
    </PrimaryLayout>
);

export default Search;
