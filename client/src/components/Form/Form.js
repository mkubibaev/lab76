import React from 'react';

import './Form.css';

const Form = props => {
    return (
        <div className="form">
            <div className="container">
                <div className="form-row">
                    <div className="col-3">
                        <input placeholder="author"
                               type="text"
                               className="control"
                        />
                    </div>
                    <div className="col-8">
                        <input placeholder="message"
                               type="text"
                               className="control"
                        />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
