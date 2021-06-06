import firebase from 'firebase'

export default {
    fetchMovies() {
        return firebase.database().ref('/movies').once('value');
    },
    fetchMovieDetail(id) {
        return firebase.database().ref(`/movieDetails/${id}`).once('value');
    }
}