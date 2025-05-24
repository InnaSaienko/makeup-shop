import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext";
import {CustomInput} from "../RegisterForm/CustomInput";
import "./AuthorizationFormik.scss";
import {Link} from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import {applySchema} from "../RegisterForm/ApplySchema";

export const AuthorizationFormik = ({isOpen}) => {
    const {guest, loggedUser, closeAuthorization, verifyUserCredentials, signIn} = useAuthorization();
    const [isShaking, setIsShaking] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    };
    const loginSchema = applySchema.pick(['email', 'password']);
   const onSubmit = (values, options) => {
        const isValidUser = verifyUserCredentials(values.email, values.password);
        if (isValidUser) {
            signIn(values.email);
            options.resetForm();
            closeAuthorization();
        } else {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        loggedUser !== guest ? (<LogOut/>) : (
            <div className="form-wrapper-author">
                <div className="background-overlay" onClick={closeAuthorization}></div>
                <Formik validationSchema={loginSchema} initialValues={initialValues} onSubmit={onSubmit}>
                    <Form className={`modal-auth ${isShaking ? "shake" : ""}`}>
                        <span className="close" onClick={closeAuthorization}>&times;</span>
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
                                onClick={closeAuthorization}
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