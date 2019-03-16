import {
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    messages: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages,
                loading: false
            };

        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        default:
            return state
    }
};

export default reducer;
