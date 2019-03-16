import React from 'react';

import './Message.css'

const Message = props => {
    return (
        <div className="message">
            <span className="message-author">{props.author}</span>
            <p className="message-text">{props.message}</p>
            <span className="message-date">{props.datetime}</span>
        </div>
    );
};

export default Message;