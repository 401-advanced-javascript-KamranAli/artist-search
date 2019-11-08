import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSongs } from '../../services/api-call';
import Songs from '../songs/Songs';

export default function FindSongs({ match }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if(songs) {
      getSongs(match.params.id)
        .then(songs => {
          setSongs(songs);
        });
    }
  }, []);



  return (
    <>
      <Songs songs={songs} name={match.params.name} />
    </>
  );
}

FindSongs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
