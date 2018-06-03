import {
    FETCH_SERIES_BEGIN,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_ERROR
} from '../actions/seriesActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function seriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SERIES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.series
            };

        case FETCH_SERIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}