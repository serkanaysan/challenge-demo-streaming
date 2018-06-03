export const FETCH_SERIES_BEGIN = 'FETCH_SERIES_BEGIN';
export const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';
export const FETCH_SERIES_ERROR = 'FETCH_SERIES_ERROR';

export const fetchSeries = () => dispatch => {
    dispatch(fetchSeriesBegin());
    return fetch("/api/series")
        .then(response => response.json())
        .then(series => {
            dispatch(fetchSeriesSuccess(series));
        })
        .catch(error => dispatch(fetchSeriesError(error)));
}

export const fetchSeriesBegin = () => ({
    type: FETCH_SERIES_BEGIN
});

export const fetchSeriesSuccess = series => ({
    type: FETCH_SERIES_SUCCESS,
    payload: { series }
});

export const fetchSeriesError = error => ({
    type: FETCH_SERIES_ERROR,
    payload: { error }
});