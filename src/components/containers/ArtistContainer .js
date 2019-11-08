// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import { getArtists } from '../../services/api-call';

export default function FindArtist() {
  const [artists, setArtist] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  const handleSubmit = () => {
    event.preventDefault();
    getArtists(query, page)
      .then(artists => {
        setArtist(artists);
      });
  };

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
