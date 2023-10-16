import React from "react";
import MuiTheme from "../../UI/MuiTheme";
import itexLogo from "../../assets/itexLogo.png";
import TextfieldWrapper from "../../UI/TextField";
import { Formik, Form } from "formik";
import { loginFormSchema } from "../../schemas/validationSchema";
import {
  Container,
  Box,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Email, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../../UI/FormStyleSheet.scss";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="loginForm__header">
        <img src={itexLogo} alt="itexLogo" className="loginForm__itexLogo" />
        <p>Please sign in to your account to continue</p>
      </div>

      <div className="loginForm__control">
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={loginFormSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <MuiTheme>
              <Container maxWidth="sm">
                <Box sx={{ mx: 2, my: 3, p: 3 }}>
                  <TextfieldWrapper
                    id="email"
                    name="email"
                    label="Enter your email address"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mx: 2, my: 3, p: 3 }}>
                  <TextfieldWrapper
                    id="password"
                    name="password"
                    type="password"
                    label="Enter your password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Visibility />
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
                      sx={{ ml: 1, color: "primary.main" }}
                      onClick={() => navigate("/forgot-password")}
                    >
                      Reset
                    </Box>
                  </Typography>
                </Box>

                <Box sx={{ mx: 2, my: 3, p: 3 }}>
                  <Button variant="contained" fullWidth type="submit">
                    Login In
                  </Button>
                </Box>
              </Container>
            </MuiTheme>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
