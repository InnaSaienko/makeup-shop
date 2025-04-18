import React, {useId, useState} from 'react';
import {Field, useFormikContext} from "formik";
import "./CustomInput.scss";

export const CustomInput = ({name}) => {
    const id = useId();
    const {values, setFieldValue} = useFormikContext();
    const isPasswordField = (name === 'password' || name === 'repeat_password');
    const [showPassword, setShowPassword] = useState()

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const formatLabel = (key) =>
        key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

    return (
        <div className="input-group">
            <Field id={id} name={name} className="input" as="input"/>
            <label htmlFor={id} className="floating-label">{formatLabel(name)}</label>
            {isPasswordField ? (<span className="password-show-button"></span>) : ("")}
            <span className="bar"></span>
        </div>
    );
};