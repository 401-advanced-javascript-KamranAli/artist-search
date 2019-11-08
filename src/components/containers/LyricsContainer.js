import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LyricCard from '../../components/lyrics/LyricCard';
import { getLyrics } from '../../services/api-call';

export default function FindLyrics({ match }) {
  const [lyric, setLyric] = useState([]);

  useEffect(() => {
    if(lyric) {
      getLyrics(match.params.title, match.params.name)
        .then(lyric => {
          setLyric(lyric);
        });
    }
  }, []);

  return (
    <LyricCard lyric={lyric.lyrics} />
  );
}

FindLyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};
