import React from 'react';
import PropTypes from 'prop-types';

const LyricCard = ({ lyric }) => {

  return (
    <div>
      <pre>{lyric}</pre>
    </div>
  );
};

LyricCard.propTypes = {
  lyric: PropTypes.string
};

export default LyricCard;