import React, {FC, JSX, useState} from 'react';
import {Form, Formik, FormikHelpers} from "formik";
import {CustomInput} from "../RegisterForm/CustomInput";
import "./LogIn.scss";
import {Link} from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import {applySchema} from "../RegisterForm/ApplySchema";
import {useDispatch, useSelector} from "react-redux";
import {verifyUser} from "../../utils/verifyUser";
import {closeAuthorization, logIn} from "../../redux/authSlice";
import {selectLoggedUser, selectUsers} from "../../redux/selectors";

interface LogInProps {
    isOpen: boolean;
}

export const LogIn: FC<LogInProps> = ({isOpen}): JSX.Element | null => {
    const dispatch = useDispatch();
    const loggedUser = useSelector(selectLoggedUser);
    const users = useSelector(selectUsers);
    const [isShaking, setIsShaking] = useState(false);

    type LoginUser = Pick<User, 'email' | 'password'>;

    const initialValues: LoginUser = {
        email: "",
        password: "",
    };
    const loginSchema = applySchema.pick(['email', 'password']);

    const onSubmit = (
        values: LoginUser,
        options: FormikHelpers<LoginUser>
    ) => {
        const isValidUser = verifyUser(users, values.email, values.password);
        if (isValidUser) {
            dispatch(logIn(values.email));
            options.resetForm();
            dispatch(closeAuthorization());
        } else {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        loggedUser !== "guest" ? (<LogOut/>) : (
            <div className="form-wrapper-author">
                <div className="background-overlay" onClick={() => dispatch(closeAuthorization())}></div>
                <Formik validationSchema={loginSchema} initialValues={initialValues} onSubmit={onSubmit}>
                    <Form className={`modal-auth ${isShaking ? "shake" : ""}`}>
                        <span className="close" onClick={() => dispatch(closeAuthorization())}>&times;</span>
                        <h2>Login to personal account</h2>
                        {Object.keys(initialValues).map((key) => {
                            return <CustomInput key={key} name={key}/>
                        })}
                        <div className="forgot-pass-link">Forgot the password?</div>
                        <button type="submit" className="button full-width">
                            Sign In
                        </button>
                        <div className="input-row links">
                            <Link
                                to="/register-form"
                                className="auth-link"
                                onClick={() => dispatch(closeAuthorization())}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    )
}