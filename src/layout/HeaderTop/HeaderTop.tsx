import React, {JSX} from "react";
import "./HeaderTop.scss";
import SearchBox from "./SearchBox";
import LogoBox from "./LogoBox";
import UserBox from "./UserBox";

const HeaderTop = () : JSX.Element => {

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

export default HeaderTop;
