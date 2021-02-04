import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <>
    <label htmlFor="search">Search</label>
    <input
      data-testid="search-results"
      id="search"
      name="search"
      type="search"
      value={search}
      onChange={onChange} />
  </>
);

Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
