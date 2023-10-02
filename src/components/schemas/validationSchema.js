import * as yup from "yup";

const passwordRules =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("This is not a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("Password is required"),
});
