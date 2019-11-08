import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

const Albums = ({ albums, incrementPage, decrementPage, name }) => {
  const albumElements = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard {...album} name={name} />
      </li>
    );
  });

  return (
    <>
      <button type="button" onClick={decrementPage}>Back</button>
      <button type="button" onClick={incrementPage}>Next</button>
      <ul>
        {albumElements}
      </ul>
    </>
  );
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
  })),
  name: PropTypes.string,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func
};

export default Albums;
