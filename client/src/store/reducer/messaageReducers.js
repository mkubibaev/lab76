import {
    AUTHOR,
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
    MESSAGE
} from "../action/actionTypes";

const initialState = {
    author: '',
    message: '',
    messages: []
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

        case AUTHOR:
            return {...state,
                author: action.text
            };

        case MESSAGE:
            return {...state,
                message: action.text
            };

        default:
            return state
    }
};

export default reducer;