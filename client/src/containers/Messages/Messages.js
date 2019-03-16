import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import './Messages.css';
import {fetchMessages} from "../../store/actions/messagesActions";

class Messages extends Component {

    componentDidMount() {
        this.props.fetchMessages();
    }

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
                <Form/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
        fetchMessages: () => dispatch(fetchMessages()),
        // createMessage: message => dispatch(createMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
