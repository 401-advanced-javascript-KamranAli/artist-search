import React from 'react';
import LyricCard from '../../components/lyrics/LyricCard';
import useLyrics from '../hooks/useLyrics';

export default function FindLyrics() {
  const { lyric } = useLyrics();

  return (
    <LyricCard lyric={lyric.lyrics} />
  );
}
