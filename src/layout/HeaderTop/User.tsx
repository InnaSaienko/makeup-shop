import React, {JSX} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuthOpen, selectIsLoggedIn} from "../../redux/selectors";
import {openAuthorization} from "../../redux/authSlice";
import LogIn from "../../components/LogIn/LogIn";
import LogOut from "../../components/LogOut/LogOut";

const User = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isAuthOpen = useSelector(selectIsAuthOpen);

    const handleClick = () => {
        dispatch(openAuthorization());
    };

    return (
        <>
            <div className={`authorization ${isLoggedIn ? "logged-in" : "logged-out"}`}
                 onClick={handleClick}
            ></div>
            {isAuthOpen && (
                isLoggedIn ? <LogOut /> : <LogIn />
            )}
        </>

    );
};

export default User;