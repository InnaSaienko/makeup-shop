import React, {useId, useState} from 'react';
import {ErrorMessage, Field, useFormikContext} from "formik";
import "./CustomInput.scss";

export const CustomInput = ({name}) => {
    const id = useId();
    const { values , setFieldValue} = useFormikContext();
    const isPasswordField = (name === 'password' || name === 'repeat_password');
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const formatLabel = (key) =>
        key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

    const hasValue = !!values[name];
    const isActive = isFocused || hasValue;
    return (
        <div className="input-group">
            <Field name={name}>
                {({field}) => (
                    <div>
                        <input
                        {...field}
                        id={id}
                        type={isPasswordField && !showPassword ? 'password' : 'text'}
                        className="input"
                        placeholder=" "
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        value={field.value}
                        onChange={(event) => setFieldValue(field.name, event.target.value)}
                        autoComplete={name === 'password' ? 'current-password' : 'on'}
                        />
                        <ErrorMessage name={name} component="div" className="error" />
                    </div>
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