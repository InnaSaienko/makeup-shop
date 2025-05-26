import React, {JSX} from 'react';
import {Form, Formik, FormikHelpers} from "formik";
import {useNavigate} from "react-router-dom";
import {useAuthorization} from "../../context/AuthorizationContext/AuthorizationContext";
import {CustomInput} from "./CustomInput";
import "./RegisterForm.scss";
import {applySchema} from "./ApplySchema";

export const RegisterForm = () : JSX.Element=> {
    const navigate = useNavigate();
    const {userSignUp} = useAuthorization();

    const onSubmit = (
        values: User,
        options: FormikHelpers<User>) => {
        const {repeat_password, ...userWithoutPassword} = values;
        userSignUp(userWithoutPassword);
        options.resetForm();
        navigate(`/`);
    }

    const initialValues : User= {
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
                    return <CustomInput key={key} name={key}/>
                })}
                <button type="submit" className="button">Sign up</button>
            </Form>
        </Formik>
    </div>);
};
export default RegisterForm;