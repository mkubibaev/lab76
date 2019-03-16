import axios from '../../axios-api';

import {AUTHOR, FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS, MESSAGE} from "./actionTypes";

export const fetchMessagesRequest = () => ({type: FETCH_MESSAGES_REQUEST});
export const fetchMessagesSuccess = message => ({type: FETCH_MESSAGES_SUCCESS, message});
export const fetchMessagesFailure = error => ({type: FETCH_MESSAGES_FAILURE, error});

export const authorHandler = text => ({type: AUTHOR, text});
export const messageHandler = text => ({type: MESSAGE, text});

export const createMessage = (messages) => {
    return dispatch => {
        dispatch(fetchMessagesRequest());
        return axios.post('/messages', messages).then(response => {
               dispatch(fetchMessagesSuccess(response.data))
        }, error => {
           dispatch(fetchMessagesFailure(error));
        });
    };
};