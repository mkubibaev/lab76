import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import './Messages.css';
import {createMessage, fetchMessages} from "../../store/actions/messagesActions";

class Messages extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.messages.length !== this.props.messages.length
    }

    componentDidMount() {
        this.props.fetchMessages();
    }

    componentDidUpdate(prevProps) {
        const lastDate = this.props.messages[this.props.messages.length - 1].datetime;

        clearInterval(this.intervalId);
        this.fetchNewMessages(lastDate);

        if (prevProps.messages.length !== this.props.messages.length) {
            window.scroll(0, window.document.body.offsetHeight);
        }
    }

    fetchNewMessages = lastDate => {
        this.intervalId = setInterval(() => {
            this.props.fetchMessages(lastDate)
        }, 2000);
    };

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
        fetchMessages: lastDate => dispatch(fetchMessages(lastDate)),
        createMessage: message => dispatch(createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
