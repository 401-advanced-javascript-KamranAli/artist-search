import React, { useState } from 'react';
import Albums from '../albums/Albums';
import useAlbums from '../hooks/useAlbums';

export default function FindAlbum() {

  const [page, setPage] = useState(0);
  const { albums, name } = useAlbums(page);

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Albums albums={albums} name={name} incrementPage={incrementPage} decrementPage={decrementPage} />
    </div>
  );
}
