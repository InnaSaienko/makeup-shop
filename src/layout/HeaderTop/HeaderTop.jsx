import React, { useState, useEffect } from "react";
import { Authorization } from "../../components/Authorization/Authorization";
import { Basket } from "../../components/Basket/Basket";
import { useLocation, NavLink } from "react-router-dom";
import "./HeaderTop.scss";

function HeaderTop() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);
  const location = useLocation();

  const openModal = (e) => {
    e.preventDefault();
    
    if (e.target.className === 'authorization active') {
      if(isBasketModalOpen) {
        setIsBasketModalOpen(false);
      }
      setIsAuthModalOpen(true);
    } else if (e.target.className === 'basket active') {
      if(isAuthModalOpen) {
        setIsAuthModalOpen(false);
      }
      setIsBasketModalOpen(true);
    }    
  };

  const closeModalAuth = () => {
    setIsAuthModalOpen(false);
  };

  const closeModalBasket = () => {
    setIsBasketModalOpen(false);
  };

  useEffect(() => {
    if (isAuthModalOpen || isBasketModalOpen) {
      setIsAuthModalOpen(false);
      setIsBasketModalOpen(false);
    }
  }, [location]);
  
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
          <button className="basket">
          <span className="basket-quant">3</span>

          </button>
          {/* <div className="auth">
          <NavLink to="#modal1" className="authorization" onClick={openModal} />
          </div>
          <div className="header-basket">
          <NavLink to="#modal2" className="basket" onClick={openModal} />
          </div> */}
        </div>
      </div>
      {/* <Authorization isOpen={isAuthModalOpen} closeModal={closeModalAuth} /> */}
      {/* <Basket isOpen={isBasketModalOpen} closeModal={closeModalBasket}/> */}
    </header>
  );
}

export { HeaderTop };
