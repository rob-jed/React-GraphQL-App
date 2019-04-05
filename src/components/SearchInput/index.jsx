import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import CloseButton from 'components/CloseButton';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

import './styles.scss';

const propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

const defaultProps = {
    name: '',
    value: '',
    onChange: () => null,
    placeholder: 'Search',
};

const SearchInput = ({
    name,
    value,
    onChange,
    placeholder,
}) => {
    const handleChange = useCallback((e) => {
        const { value: inputValue } = e.target;

        onChange(inputValue);
    }, []);

    const handleClear = useCallback(() => {
        onChange('');
    }, []);

    return (
        <div className="search-input">
            <span className="icon">
                <SearchIcon />
            </span>

            <input
                name={name}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />

            { value && <CloseButton onClick={handleClear} /> }
        </div>
    );
};

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
