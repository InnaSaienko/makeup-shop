import React from 'react';
import "./Button.scss";

type ButtonProps = {
    context: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({context, onClick}) => {
    return (
        <button className="button buy" onClick={onClick}>{context}</button>
    );
};

export default Button;
