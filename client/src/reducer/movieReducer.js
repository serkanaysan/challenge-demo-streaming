import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../actions/movieActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.movies
            };

        case FETCH_MOVIES_ERROR:
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