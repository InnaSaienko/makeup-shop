import React, {FC, JSX} from 'react';
import "./Button.scss";

type ButtonProps = {
    context: string;
    onClick: () => void;
};

const Button: FC<ButtonProps> = ({context, onClick}) : JSX.Element => {
    return (
        <button className="button buy" onClick={onClick}>{context}</button>
    );
};

export default Button;
