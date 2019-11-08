// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import { getArtists } from '../../services/api-call';

export default function FindArtist() {
  const [artists, setArtist] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    if(artists) {
      getArtists(query, page)
        .then(artists => {
          setArtist(artists);
        });
    }
  }, [page]);

  const handleSubmit = () => {
    event.preventDefault();
    setQuery(query);
  };

  const handleChange = () => {
    setQuery(query);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  FindArtist.propTypes = {
    history: PropTypes.object.isRequired
  };

  return (
    <>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} query={query} incrementPage={incrementPage} decrementPage={decrementPage} />
      <Artists artists={artists} />
    </>
  );
}

// export default class ArtistContainer extends Component {

//   static propTypes = {
//     history: PropTypes.object.isRequired
//   }

//   state = {
//     artists: [],
//     query: '',
//     page: 0
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     getArtists(this.state.query, this.state.page)
//       .then(artists => {
//         this.setState({ artists });
//       });
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }

//   decrementPage = () => {
//     this.setState(state => ({
//       page: state.page - 1
//     }), () =>
//       getArtists(this.state.query, this.state.page)
//         .then(artists => {
//           this.setState({ artists });
//         })
//     );
//   }

//   incrementPage = () => {
//     this.setState(state => ({
//       page: state.page + 1
//     }), () =>
//       getArtists(this.state.query, this.state.page)
//         .then(artists => {
//           this.setState({ artists });
//         })
//     );
//   }

//   render() {
//     const { artists } = this.state;
//     return (
//       <>
//         <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query} incrementPage={this.incrementPage} decrementPage={this.decrementPage} />
//         <Artists artists={artists} />
//       </>
//     );
//   }

// }