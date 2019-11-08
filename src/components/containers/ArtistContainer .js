// import React, { Component } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artists from '../artists/Artists';
import SearchForm from '../artists/SearchForm';
import { getArtists } from '../../services/api-call';

function FindArtist() {
  const [artists, setArtist] = setState([]);
  const [query, setQuery] = setState('');
  const [page, setPage] = setState(0);

  useEffect(() => {
    if(artists) {
      getArtists(query, page)
        .then(artists => {
          setArtist(artists);
        });
    }
  });

}

export default class ArtistContainer extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    artists: [],
    query: '',
    page: 0
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getArtists(this.state.query, this.state.page)
      .then(artists => {
        this.setState({ artists });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  decrementPage = () => {
    this.setState(state => ({
      page: state.page - 1
    }), () =>
      getArtists(this.state.query, this.state.page)
        .then(artists => {
          this.setState({ artists });
        })
    );
  }

  incrementPage = () => {
    this.setState(state => ({
      page: state.page + 1
    }), () =>
      getArtists(this.state.query, this.state.page)
        .then(artists => {
          this.setState({ artists });
        })
    );
  }

  render() {
    const { artists } = this.state;
    return (
      <>
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query} incrementPage={this.incrementPage} decrementPage={this.decrementPage} />
        <Artists artists={artists} />
      </>
    );
  }

}