import React, {JSX} from 'react';
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext";

const User = () : JSX.Element => {
    const {openAuthorization, loggedUser, guest} = useAuthorization();

    return (
        <div className={`authorization ${loggedUser !== guest ? "logged-in" : "logged-out"}`}
             onClick={openAuthorization}
        >
        </div>
    );
};

export default User;