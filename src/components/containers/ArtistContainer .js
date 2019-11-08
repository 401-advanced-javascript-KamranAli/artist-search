// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import useArtists from '../hooks/useArtists';

export default function FindArtist() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  const { artists, findArtists } = useArtists(query, page);

  const handleSubmit = (event) => {
    event.preventDefault();
    findArtists();
  }

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  FindArtist.propTypes = {
    history: PropTypes.object.isRequired
  };

  return (
    <>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} query={query} incrementPage={incrementPage} decrementPage={decrementPage} />
      <Artists artists={artists} />
    </>
  );
}
