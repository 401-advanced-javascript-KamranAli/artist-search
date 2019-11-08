import { useState } from 'react';
import { getArtists } from '../../services/api-call';

const useArtists = (query, page) => {
  const [artists, setArtist] = useState([]);

  const findArtists = () => {
    getArtists(query, page)
      .then(artists => {
        setArtist(artists);
      });
  };

  return { artists, findArtists };

};

export default useArtists;