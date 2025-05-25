import React from 'react';
// @ts-ignore
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext.jsx";
import RegistrationForm from "../../pages/RegistrationPage";

const UserBox = () => {
    const {isLoggedIn, loggedUser, guest} = useAuthorization();

    return (
        <div className="header-right-row">
            {isLoggedIn && loggedUser === guest && <RegistrationForm/>}
        </div>
    );
};

export default UserBox;