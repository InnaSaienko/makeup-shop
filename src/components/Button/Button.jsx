import React from 'react';

const Button = ({ onClick }) => {
    return (
        <div className="product-item__button">
            <button className="button buy" onClick={onClick}>Buy</button>
        </div>
    );
}

export default Button;
