import { useState, useEffect } from 'react';
import { getSongs } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const useSongs = () => {
  const [songs, setSongs] = useState([]);
  const { id, name } = useParams();

  useEffect(() => {
    if(songs) {
      getSongs(id)
        .then(songs => {
          setSongs(songs);
        });
    }

  }, []);

  return { songs, name };
};

export default useSongs;