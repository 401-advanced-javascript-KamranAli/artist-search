import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';


function FindAlbum({ match }) {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if(albums) {
      getAlbums(match.params.id, page)
        .then(albums => {
          setAlbums(albums);
        });
    }
  }, [page]);

  return (
    <div>
      <Albums albums={albums} id={albums.id} name={match.params.name} incrementPage={page} decrementPage={page}  />
    </div>
  );
}

FindAlbum.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default FindAlbum;


// export default class AlbumContainer extends Component {

// static propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired
//     }).isRequired
//   }).isRequired
// }

//   state = {
//     albums: [],
//     page: 0
//   }

// componentDidMount() {
//   getAlbums(this.props.match.params.id, this.state.page)
//     .then(albums => {
//       this.setState({ albums });
//     });
// }

//   decrementPage = () => {
//     this.setState(state => ({
//       page: state.page - 1
//     }), () =>
//       getAlbums(this.props.match.params.id, this.state.page)
//         .then(albums => {
//           this.setState({ albums });
//         })
//     );
//   }

//   incrementPage = () => {
//     this.setState(state => ({
//       page: state.page + 1
//     }), () =>
//       getAlbums(this.props.match.params.id, this.state.page)
//         .then(albums => {
//           this.setState({ albums });
//         })
//     );
//   }

//   render() {

//     const { albums } = this.state;



// }