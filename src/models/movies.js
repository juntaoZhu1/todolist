import { searchMovies, getMovie} from '@/services/apis';



export default {
  namespace: 'movies',

  state: {
    movieList: [],
    movieDetails: {},
  },

  effects: {
    *fetchMovieItems({ payload }, { call, put }) {
      const response = yield call(searchMovies, payload);
      yield put({
        type: 'searchMovieItems',
        payload: response,
      });
    },
    *getMovieItem({ payload, callback }, { call, put }) {
      const result = yield call(getMovie, payload);
      yield put({
        type: 'getMovieDetail',
        payload: response,
      })
    },
  },

  reducers: {
    searchMovieItems(state, action) {
      return {
        ...state,
        movieList: action.payload,
      };
    },

    getMovieDetail(state, action) {
      var itemList = state.movieDetails;
      itemList.push(action.payload);
      return {
        ...state,
        movieDetails: itemList,
      };
    },
