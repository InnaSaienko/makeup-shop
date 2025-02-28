import React from 'react';
import "./Button.scss";

const Button = ({onClick, context}) => {
    return (
        <button className="button buy" onClick={onClick}>{context}</button>
    );
}

export default Button;
