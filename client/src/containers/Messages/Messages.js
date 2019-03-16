import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import './Messages.css';
import {createMessage, fetchMessages} from "../../store/actions/messagesActions";

class Messages extends Component {

    componentDidMount() {
        this.props.fetchMessages();
    }

    // getNewMessages = (lastDate) => {
    //     this.intervalId = setInterval(() => {
    //         this.getAllMessages(lastDate)
    //     }, 2000);
    // };


    render() {
        return (
            <Fragment>
                <div className="Messages">
                    {this.props.messages.map(message => (
                        <Message
                            key={message.id}
                            author={message.author}
                            message={message.message}
                            datetime={message.datetime}
                        />
                    ))}
                </div>

                <Form onSubmit={this.props.createMessage}/>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = dispatch => ({
        fetchMessages: () => dispatch(fetchMessages()),
        createMessage: message => dispatch(createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
