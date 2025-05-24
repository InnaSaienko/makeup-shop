import React from 'react';
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext";
import {CustomInput} from "./CustomInput";
import "./RegisterFormikForm.scss";
import {applySchema} from "./ApplySchema";

export const RegisterFormikForm = () => {
        const navigate = useNavigate();
    const {userSignUp} = useAuthorization();

    const onSubmit = (values, options) => {
        console.log("user's data", values);
        const {repeat_password, ...userWithoutPassword} = values;
        userSignUp(userWithoutPassword);
        options.resetForm();
        navigate(`/`);
    }
    const initialValues = {
        first_name: "",
        last_name: "",
        birthday: "",
        phone: "",
        email: "",
        password: "",
        repeat_password: "",
    }

    return (<div className="form-wrapper">
        <Formik validationSchema={applySchema} initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="form">
                <h2 className="form__title">Registration of a new user</h2>
                {Object.keys(initialValues).map((key) => {
                    if (typeof initialValues[key] === 'boolean') return null;
                    return <CustomInput key={key} name={key}/>
                })}
                <button type="submit" className="button">Sign up</button>
            </Form>
        </Formik>
    </div>);
};