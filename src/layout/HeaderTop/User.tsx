import React, {FC} from 'react';
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext";
import {RegistrationForm} from "../../components/RegisterForm/RegistrationForm";

const User : FC = () => {
    const {isLoggedIn, loggedUser, guest} = useAuthorization();

    return (
        <div>
            {isLoggedIn && loggedUser === guest && <RegistrationForm/>}
        </div>
    );
};

export default User;