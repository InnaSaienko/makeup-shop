import React, {JSX} from 'react';
import {NavLink} from "react-router-dom";

const LogoBox = () :JSX.Element => {
    return (
        <div className="header-center-row">
            <NavLink to="/" title="Beaty no limits" className="logo" />
        </div>
    );
};

export default LogoBox;