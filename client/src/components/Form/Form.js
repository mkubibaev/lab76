import React from 'react';

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import './Form.css';

const Form = props => {
    return (
        <div className="form">
            <div className="container">
                <div className="form-row">
                    <div className="col-3">
                        <Input placeholder="author"
                               onValue={props.author}
                               onInput={props.changeAuthor}
                        />
                    </div>
                    <div className="col-8">
                        <Input placeholder="message"
                               onValue={props.message}
                               onInput={props.changeMessage}
                        />
                    </div>
                    <div className="col-1">
                        <Button onSendClick={props.sendMessage} label="Send" type="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;