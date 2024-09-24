import React, { useState, useEffect } from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { Authorization } from "../../components/Authorization/Authorization";

import { useLocation, NavLink } from "react-router-dom";
import "./HeaderTop.scss";

function HeaderTop() {
  const location = useLocation();
  const { openBasket, getItemQuantity } = useBasket();

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
          <button className="basket" onClick={openBasket}>
            <span className="basket-quant">{getItemQuantity()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { HeaderTop };
