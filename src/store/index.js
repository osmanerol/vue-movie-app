import { createStore } from 'vuex'
import service from '../services'

const state = {
  movies : [],
  movieDetails : {}
}

const getters = {
  movies() {
    return this.movies;
  }
}

const mutations = {
  setMovies(state, movies) {
    state.movies = movies;
  },
  setMovieDetail(state, payload) {
    const { id, data } = payload;
    state.movieDetails[id] = data;
  }
}

const actions = {
  fetchMovies(context) {
    return service.fetchMovies().then(snapshot => {
      context.commit('setMovies', snapshot.val())
    })
  },
  fetchMovieDetail(context, id){
    return service.fetchMovieDetail(id).then(snapshot => {
      context.commit('setMovieDetail', { 
        id: id, 
        data: snapshot.val() 
      });
    })
  }
}

const modules = { }

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})
