import axios from '../../axios-api';

import {FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS} from "./actionTypes";

export const fetchMessagesRequest = () => ({type: FETCH_MESSAGES_REQUEST});
export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const fetchMessagesFailure = error => ({type: FETCH_MESSAGES_FAILURE, error});

export const fetchMessages = () => {
    return dispatch => {
        dispatch(fetchMessagesRequest());

        axios.get('/messages').then(response => {
            dispatch(fetchMessagesSuccess(response.data))
        }, error => {
            dispatch(fetchMessagesFailure(error));
        });
    };
};

export const createMessage = message => {
    return dispatch => {
        dispatch(fetchMessagesRequest());
        return axios.post('/messages', message).then(response => {
            dispatch(fetchMessagesSuccess(response.data))
        }, error => {
            dispatch(fetchMessagesFailure(error));
        });
    };
};
