import { useState, useEffect } from 'react';
import { getAlbums } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const useAlbums = (page) => {
  const [albums, setAlbums] = useState([]);
  const { id, name } = useParams();

  const findAlbums = () => {
    getAlbums(id, page)
      .then(albums => {
        setAlbums(albums);
      });
  };

  useEffect(() => {
    findAlbums();
  }, [page]);

  return { albums, name };
};

export default useAlbums;
