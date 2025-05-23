import * as Yup from "yup";

const regPhone = /^\D*(\d\D*){11,}$/;

export const applySchema = Yup.object().shape({
    first_name: Yup.string()
        .min(3, "Min 3 chars")
        .max(20, "Max 20 chars")
        .trim()
        .required("First name is required"),

    last_name: Yup.string()
        .trim()
        .required("Last name is required"),

    birthday: Yup.date()
        .nullable()
        .min(new Date(1900, 0, 1), "Invalid date"),

    phone: Yup.string()
        .matches(regPhone, 'Phone must have at least 11 digits')
        .required("Phone is required"),

    email: Yup.string()
        .email("Invalid email format") // this is better than regex
        .required("Email is required"),

    password: Yup.string()
        .min(6, "Password too short") // Add basic validation
        .required("Password is required"),

    repeat_password: Yup.string()
        .oneOf([Yup.ref('password')], "Passwords must match")
        .required("Repeat password is required"),
});
