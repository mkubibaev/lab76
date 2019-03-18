import {
    CREATE_MESSAGE_FAILURE,
    CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    messages: [],
    loading: true,
    error: null,
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
                messages: [...state.messages].concat(action.messages),
                loading: false
            };

        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case CREATE_MESSAGE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
            };

        case CREATE_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error.response.data.error
            };

        default:
            return state
    }
};

export default reducer;
