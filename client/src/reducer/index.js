import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import seriesReducer from './seriesReducer';

export default combineReducers({
    movies: movieReducer,
    series: seriesReducer
});