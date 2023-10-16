import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("This is not a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(8)
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
});

export const resetFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("This is not a valid Email")
    .required("Email is required"),
});
