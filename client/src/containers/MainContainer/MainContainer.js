import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Messages from "../../components/Messages/Messages";
import {connect} from "react-redux";
import {authorHandler, createMessage, fetchMessage, messageHandler} from "../../store/action/messageAction";

class MainContainer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.messages.length !== this.props.messages.length ||
            nextState.author !== this.props.author ||
            nextState.message !== this.props.message;
    }

    componentDidMount() {
        this.props.getMessage();
    }

    // sendClickHandler = () => {
    //     if (this.state.author !== '' && this.state.message !== '') {
    //
    //         const data = new URLSearchParams();
    //
    //         data.set('author', this.state.author);
    //         data.set('message', this.state.message);
    //
    //         return fetch(messagesUrl, {
    //             method: 'post',
    //             body: data,
    //         }).then(this.setState({
    //             author: '',
    //             message: ''
    //         })).catch(error => {
    //             console.log(error);
    //         });
    //
    //     } else {
    //         alert('Please fill all fields!');
    //     }
    // };

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <Messages messages={this.props.messages}/>
                </div>
                <Form
                    author={this.props.author}
                    message={this.props.message}
                    onChange={(event) => this.props.authorHandler(event)}
                    value={this.props.author}
                    //sendMessage={this.sendClickHandler}
                >
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages,
        author: state.author,
        message: state.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMessage: () => dispatch(fetchMessage()),
        createMessage: message => dispatch(createMessage(message)),
        authorHandler: event => dispatch(authorHandler(event.target.value)),
        messageHandler: event => dispatch(messageHandler(event.target.value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);