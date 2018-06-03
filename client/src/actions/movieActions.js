export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = () => dispatch => {
    dispatch(fetchMoviesBegin());
    return fetch("/api/movies")
        .then(response => response.json())
        .then(movies => {
            dispatch(fetchMoviesSuccess(movies));
        })
        .catch(error => dispatch(fetchMoviesError(error)));
}

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies }
});

export const fetchMoviesError = error => ({
    type: FETCH_MOVIES_ERROR,
    payload: { error }
});