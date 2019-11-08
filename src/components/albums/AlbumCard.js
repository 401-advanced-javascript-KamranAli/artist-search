import React from 'react';
import PropTypes from 'prop-types';
import styles from './AlbumCard.css';
import { Link } from 'react-router-dom';


const AlbumCard = ({ id, title, image, name }) => {

  return (
    <div key={id} className={styles.AlbumCard}>
      <Link to={`/songs/${id}/${name}`}>
        <p>{title}</p>
      </Link>
      <img src={image} />
    </div>
  );
};

AlbumCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string
};

export default AlbumCard;