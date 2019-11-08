import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ handleChange, handleSubmit, query, decrementPage, incrementPage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" value={query} onChange={handleChange} placeholder="Search here" />
      <button>Search</button>
      <button type="button" onClick={decrementPage}>Back</button>
      <button type="button" onClick={incrementPage}>Next</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
  decrementPage: PropTypes.func,
  incrementPage: PropTypes.func
};

export default SearchForm;