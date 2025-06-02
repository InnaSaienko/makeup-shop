import React, {JSX} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectLoggedUser} from "../../redux/selectors";
import {closeAuthorization, signOut} from "../../redux/authSlice";

const LogOut = () : JSX.Element => {
    const dispatch = useDispatch();
    const loggedUser = useSelector(selectLoggedUser);

    return (
        <>
            <div className="background-overlay" onClick={() => dispatch(closeAuthorization())}></div>
            <div className="modal-auth">
                <h2>Welcome, {loggedUser}!</h2>
                <button
                    type="button"
                    className="button full-width"
                    onClick={() => dispatch(signOut())}
                >
                    Log Out
                </button>
            </div>
        </>
    );
};

export default LogOut;