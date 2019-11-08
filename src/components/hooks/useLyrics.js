import { useState, useEffect } from 'react';
import { getLyrics } from '../../services/api-call';

const useLyrics = ({ match }) => {
  const [lyric, setLyric] = useState([]);

  useEffect(() => {
    if(lyric) {
      getLyrics(match.params.title, match.params.name)
        .then(lyric => {
          setLyric(lyric);
        });
    }
  }, []);

  return { lyric };
};

export default useLyrics;
