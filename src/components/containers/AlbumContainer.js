import React, { useReducer, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Albums from '../albums/Albums';
import { getAlbums } from '../../services/api-call';

function pageReducer(state, action) {
  switch(action.type) {
    case 'incrementPage':
      return { page: state.page + 1 };
    case 'decrementPage':
      return { page: state.page - 1 };
    default:
      return state;

  }
}

function findAlbum() {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useReducer(pageReducer, { page: 0 });

  useEffect(() => {
    if(albums) {
      getAlbums(albums);
    }
  }, [page]);

  return (
    <div>
      {/* <Albums albums={albums} id={this.state.albums.id} incrementPage={this.incrementPage} decrementPage={this.decrementPage} name={this.props.match.params.name} /> */}
      <Albums onClick={() => setAlbums(albums), setPage(page)} />
    </div>
  );
}

export default findAlbum;













// export default class AlbumContainer extends Component {

//   static propTypes = {
//     match: PropTypes.shape({
//       params: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//   }

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