import React from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
// import { Authorization } from "../../components/Authorization/Authorization";

import { NavLink } from "react-router-dom";
import "./HeaderTop.scss";

function HeaderTop() {
  const { openBasket, getProductQuantity } = useBasket();

  return (
    <header className="header">
      <div className="layout">
        <div className="header-left-row">
          <div className="search-button"></div>
        </div>

        <div className="header-center-row">
          <NavLink
            to="/"
            title="MAKEUP beauty without limits"
            className="logo"
          />
        </div>
        <div className="header-right-row">
          <button className="basket-widget" onClick={openBasket}>
            <span className="basket-quant">{getProductQuantity()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { HeaderTop };
