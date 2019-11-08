import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from './ArtistCard';
import styles from './Artists.css';

const Artists = ({ artists }) => {

  const artistElements = artists.map(artist => {
    return (
      <li key={artist.id}>
        <ArtistCard {...artist} />
      </li>
    );
  });

  return (
    <ul className={styles.Artists}>
      {artistElements}
    </ul>
  );
};

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
  }))
};

export default Artists;
