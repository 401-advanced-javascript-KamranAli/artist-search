import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistCard.css';
import { Link } from 'react-router-dom';


const ArtistCard = ({ id, name, country, tags }) => {

  const tagElements = tags.map((tag, i) => {
    return (
      <p key={i}>{tag}</p>
    );
  });

  return (
    <div className={styles.ArtistCard}>

      <Link to={`/albums/${id}/${name}`}>
        <p>{name}</p>
      </Link>
      <p>{country}</p>
      {tagElements}
    </div>
  );
};

ArtistCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  country: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default ArtistCard;
