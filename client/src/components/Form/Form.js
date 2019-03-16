import React, {Component} from 'react';

import './Form.css';

class Form extends Component {
    state = {
        author: '',
        message: '',
    };

    submitHandler = event => {
        event.preventDefault();

        this.props.onSubmit({...this.state}).then(() => {
            this.setState({
                author: '',
                message: '',
            })
        })
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <form className="form" onSubmit={this.submitHandler}>
                <div className="container">
                    <div className="form-row">
                        <div className="col-3">
                            <input placeholder="author"
                                   type="text"
                                   className="control"
                                   name="author"
                                   value={this.state.author}
                                   onChange={this.inputChangeHandler}
                            />
                        </div>
                        <div className="col-8">
                            <input placeholder="message"
                                   type="text"
                                   className="control"
                                   name="message"
                                   value={this.state.message}
                                   onChange={this.inputChangeHandler}
                            />
                        </div>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

export default Form;
