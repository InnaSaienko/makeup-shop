import React from "react";
import "./HeaderTop.scss";
import SearchBox from "./SearchBox";
import LogoBox from "./LogoBox";
import UserBox from "./UserBox";

function HeaderTop() {

    return (
        <header className="header">
            <div className="layout">
                <SearchBox/>
                <LogoBox/>
                <UserBox/>
            </div>
        </header>
    );
}

export {HeaderTop};
