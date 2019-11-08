import React from 'react';
import Songs from '../songs/Songs';
import useSongs from '../hooks/useSongs';

export default function FindSongs() {
  const { songs, name } = useSongs();

  return (
    <>
      <Songs songs={songs} name={name} />
    </>
  );
}
