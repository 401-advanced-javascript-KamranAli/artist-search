import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';


function FindAlbum({ match }) {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if(albums) {
      getAlbums(match.params.id, page)
        .then(albums => {
          setAlbums(albums);
        });
    }
  }, [page]);

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Albums albums={albums} id={albums.id} name={match.params.name} incrementPage={incrementPage} decrementPage={decrementPage} />
    </div>
  );
}

FindAlbum.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default FindAlbum;
