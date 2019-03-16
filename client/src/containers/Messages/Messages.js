import React, {Component, Fragment} from 'react';

import Form from "../../components/Form/Form";
import './Messages.css';
import Message from "../../components/Message/Message";

class Messages extends Component {
    render() {
        return (
            <Fragment>
                <div className="Messages">
                    <Message
                        author="Chuck Norris"
                        message="I'll be back"
                        datetime="12313-2121"
                    />
                </div>
                <Form/>
            </Fragment>
        );
    }
}

export default Messages;
