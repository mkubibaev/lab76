import React from 'react';

import './Input.css';

const Input = props => {
    return (
        <input type="text"
               className="form-control"
               value={props.onValue}
               placeholder={props.placeholder}
               onChange={props.onInput}
        />
    );
};

export default Input;