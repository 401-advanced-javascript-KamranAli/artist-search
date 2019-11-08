import React from 'react';
import PropTypes from 'prop-types';
import SongCard from './SongCard';

const Songs = ({ songs, name }) => {

  const songElements = songs.map(song => {
    return (
      <li key={song.id}>
        <SongCard {...song} name={name} />
      </li>
    );
  });

  return (
    <ul>
      {songElements}
    </ul>
  );
};

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  name: PropTypes.string.isRequired
};

export default Songs;