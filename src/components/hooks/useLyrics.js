import { useState, useEffect } from 'react';
import { getLyrics } from '../../services/api-call';
import { useParams } from 'react-router-dom';

const useLyrics = () => {
  const [lyric, setLyric] = useState({});
  const { title, name } = useParams();

  useEffect(() => {
    if(lyric) {
      getLyrics(title, name)
        .then(lyric => {
          setLyric(lyric);
        });
    }
  }, []);

  return { lyric, title, name };
};

export default useLyrics;
