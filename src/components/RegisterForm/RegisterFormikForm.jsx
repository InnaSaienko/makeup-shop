import React from 'react';
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext";
import {CustomInput} from "./CustomInput";
import * as Yup from "yup";
import "./RegisterFormikForm.scss";

export const RegisterFormikForm = () => {
    const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const regPhone = /^\D*(\d\D*){11,}$/;
    const navigate = useNavigate();
    const {userSignUp} = useAuthorization();

    const onSubmit = (values, options) => {
        console.log("user's data", values);
        const {password, repeat_password, ...userWithoutPassword} = values;
        console.log("userWithoutPassword", userWithoutPassword);
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
        isLogin: false,
    }
    const applySchema = Yup.object().shape({
        first_name: Yup.string().min(3, "Min 3 chars").max(20, "Max 20 chars").trim().required(),
        last_name: Yup.string().trim().required(),
        birthday: Yup.date().nullable().min(new Date(1900, 0, 1)),
        phone: Yup.string().matches(regPhone, 'Should have at least 11 cifers').required(),
        email: Yup.string().matches(regEmail, 'Is not email!').required(),
    });
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