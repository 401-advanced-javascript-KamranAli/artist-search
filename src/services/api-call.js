export const getArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25&offset=${page * 25}`)
    .then(res => res.json())
    .then(results => {
      return results.artists.map(artist => {
        return {
          id: artist.id,
          name: artist.name || '',
          country: artist.area ? artist.area.name : '',
          tags: (artist.tags || []).map(tag => tag.name).slice(0, 3)
        };
      });
    });
};

export const getAlbums = (artistId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=15&offset=${page * 15}`)
    .then(res => res.json())
    .then(results => {
      return results.releases.map(release => {
        return {
          id: release.id,
          title: release.title,
          image: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://pinoyalbums.com/wp-content/uploads/2014/12/No-Album-Art-Cover.png'
        };
      });
    });
};

export const getSongs = (releaseId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(results => {
      return results.recordings.map(song => {
        return {
          id: song.id,
          title: song.title,
        };
      });
    });
};

export const getLyrics = (title, name) => {
  return fetch(`https://api.lyrics.ovh/v1/${name}/${title}`)
    .then(res => res.json());
};