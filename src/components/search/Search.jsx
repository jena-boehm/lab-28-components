import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <>
    <label htmlFor="search">Search</label>
    <input
      id="search"
      name="search"
      type="search"
      value={search}
      onChange={onChange} />
  </>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
