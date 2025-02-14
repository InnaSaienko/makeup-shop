import React from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { useAuthorization } from "../../context/AuthorizationContext/AuthorizationContext";

import { NavLink } from "react-router-dom";
import "./HeaderTop.scss";

function HeaderTop() {
  const { openBasket, getProductQuantity } = useBasket();
  const { openAuthorization, loggedUser, guest } = useAuthorization();

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
          <button className={`authorization ${loggedUser !== guest ? "logged-in" : "logged-out"}`} 
  onClick={openAuthorization}></button>
          <button className={`basket-widget ${getProductQuantity() === null ? "empty" : ""}`} onClick={openBasket}>
            <span className={`header-counter${getProductQuantity() === null ? "hidden" : ""}`}>{getProductQuantity()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { HeaderTop };
