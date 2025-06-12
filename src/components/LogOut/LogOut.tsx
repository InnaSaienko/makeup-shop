import React, {JSX} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeAuthorization, logOut} from "../../redux/authSlice";
import {selectUser} from "../../redux/selectors";

const LogOut = (): JSX.Element => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logOut()); // actual logout logic
        dispatch(closeAuthorization()); // close the modal after logout
    };

    return (
        <>
            <div className="background-overlay" onClick={() => dispatch(closeAuthorization())}></div>
            <div className="modal-auth">
                <h2>Welcome, {user.email}!</h2>
                <button
                    type="button"
                    className="button full-width"
                    onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </>
    );
};

export default LogOut;