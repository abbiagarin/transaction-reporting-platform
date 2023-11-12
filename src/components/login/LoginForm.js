import React from "react";
import MuiTheme from "../../UI/MuiTheme";
import itexLogo from "../../assets/itexLogo.png";
import TextfieldWrapper from "../../UI/TextField";
import { useNavigate } from "react-router-dom";
import { LoadingButtonWrapper } from "../../UI/Button";
import { Formik, Form } from "formik";
import { loginFormSchema } from "../../schemas/validationSchema";
import {
  Container,
  Box,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Email,
  Visibility,
  ArrowRightAlt,
  VisibilityOff,
} from "@mui/icons-material";
import "../../UI/FormStyleSheet.scss";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
  showPassword: false,
};

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <MuiTheme>
      <div className="loginForm__header">
        <img src={itexLogo} alt="itexLogo" className="loginForm__itexLogo" />
        <Typography variant="body2">
          Please sign in to your account to continue
        </Typography>
      </div>

      <div className="loginForm__control">
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={loginFormSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isValid, isSubmitting, dirty, values, setFieldValue }) => (
            <Form>
              <Container maxWidth="sm">
                <Box sx={{ mx: 2, my: 3, p: 3 }}>
                  <TextfieldWrapper
                    id="email"
                    name="email"
                    type="email"
                    label="Enter your email address"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email sx={{ cursor: "default" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mx: 2, my: 3, p: 3 }}>
                  <TextfieldWrapper
                    id="password"
                    name="password"
                    type={values.showPassword ? "text" : "password"}
                    label="Enter your password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            disableRipple
                            onClick={() =>
                              setFieldValue(
                                "showPassword",
                                !values.showPassword
                              )
                            }
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mx: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Forgot your password?
                    <Box
                      component="span"
                      sx={{ ml: 1, color: "primary.main", cursor: "pointer" }}
                      onClick={() => navigate("/forgot_password")}
                    >
                      Reset
                    </Box>
                  </Typography>
                </Box>

                <Box sx={{ mx: 2, my: 3, p: 3 }}>
                  <LoadingButtonWrapper
                    endIcon={<ArrowRightAlt sx={{ color: "#fff" }} />}
                    loading={isSubmitting}
                    disabled={isSubmitting || !isValid || !dirty || !values}
                  >
                    <span>Login In</span>
                  </LoadingButtonWrapper>
                </Box>
              </Container>
            </Form>
          )}
        </Formik>
      </div>
    </MuiTheme>
  );
};

export default LoginForm;
