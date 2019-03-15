import React from 'react';

import './Button.css';

const Button = props => {
    const buttonClasses = ['btn'];
    buttonClasses.push('btn-' + props.type);

    return (
        <button className={buttonClasses.join(' ')} onClick={props.onSendClick}>
            {props.label}
        </button>
    );
};

export default Button;