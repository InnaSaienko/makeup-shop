import React, {JSX} from 'react';
// @ts-ignore
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext.jsx";

const LogOut = () : JSX.Element => {
    const {loggedUser, closeAuthorization, signOut} = useAuthorization();

    return (
        <>
            <div className="background-overlay" onClick={closeAuthorization}></div>
            <div className="modal-auth">
                <h2>Welcome, {loggedUser}!</h2>
                <button
                    type="button"
                    className="button full-width"
                    onClick={() => signOut(loggedUser)}
                >
                    Log Out
                </button>
            </div>
        </>
    );
};

export default LogOut;