import React, {JSX} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectLoggedUser} from "../../redux/selectors";
import {openAuthorization} from "../../redux/authSlice";

const User = () : JSX.Element => {
    const dispatch = useDispatch();
    const loggedUser = useSelector(selectLoggedUser);

    return (
        <div className={`authorization ${loggedUser !== "guest" ? "logged-in" : "logged-out"}`}
             onClick={() => dispatch(openAuthorization())}
        >
        </div>
    );
};

export default User;