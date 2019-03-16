import axios from '../../axios-api';

import {
    CREATE_MESSAGE_FAILURE,
    CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS
} from "./actionTypes";

export const fetchMessagesRequest = () => ({type: FETCH_MESSAGES_REQUEST});
export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const fetchMessagesFailure = error => ({type: FETCH_MESSAGES_FAILURE, error});

export const createMessageRequest = () => ({type: CREATE_MESSAGE_REQUEST});
export const createMessageSuccess = () => ({type: CREATE_MESSAGE_SUCCESS});
export const createMessageFailure = error => ({type: CREATE_MESSAGE_FAILURE, error});

export const fetchMessages = lastDate => {
    const queryParam = lastDate ? `?datetime=${lastDate}` : '';

    return dispatch => {
        dispatch(fetchMessagesRequest());

        axios.get('/messages' + queryParam).then(
            response => dispatch(fetchMessagesSuccess(response.data)),
            error => dispatch(fetchMessagesFailure(error))
        );
    };
};

export const createMessage = message => {
    return dispatch => {
        dispatch(createMessageRequest());

        return axios.post('/messages', message).then(
            () => dispatch(createMessageSuccess()),
            error => dispatch(createMessageFailure(error))
        );
    };
};
