import React, {useId, useState} from 'react';
import {Field, useFormikContext} from "formik";
import "./CustomInput.scss";

export const CustomInput = ({name}) => {
    const id = useId();
    const { values } = useFormikContext();
    const isPasswordField = (name === 'password' || name === 'repeat_password');
    const [showPassword, setShowPassword] = useState();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const formatLabel = (key) =>
        key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

    const [isFocused, setIsFocused] = useState(false);

    const hasValue = !!values[name];
    const isActive = isFocused || hasValue;
    return (
        <div className="input-group">
            <Field name={name}>
                {({field}) => (
                    <input
                        {...field}
                        id={id}
                        type={isPasswordField && !showPassword ? 'password' : 'text'}
                        className="input"
                        placeholder=" "
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}/>
                )}
            </Field>
            <label htmlFor={id} className={`floating-label ${isActive ? 'active' : ''}`}>
                {formatLabel(name)}</label>
            {isPasswordField ?
                <span
                    className={`password-button ${showPassword ? 'show' : 'hide'}`}
                    onClick={togglePasswordVisibility}
                /> :
                (null)}
            <span className="bar"></span>
        </div>
    );
};