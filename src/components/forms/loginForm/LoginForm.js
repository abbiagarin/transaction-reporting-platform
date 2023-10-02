import React from "react";
import { Formik, Form } from "formik";
import { loginFormSchema } from "../../schemas/validationSchema";
import {
  TextField,
  Container,
  Box,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import MuiTheme from "../formStylesheet/MuiTheme";
import { Email, Visibility } from "@mui/icons-material";
import itexLogo from "../../../assets/itexLogo.png";
import "../formStylesheet/FormStyleSheet.scss";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  return (
    <>
      <div className="loginForm__header">
        <img src={itexLogo} alt="itexLogo" className="loginForm__itexLogo" />
        <p>Please sign in to your account to continue</p>
      </div>

      <div className="loginForm__control">
        <Formik
          initialValues={initialValues}
          validationSchema={loginFormSchema}
        >
          {(props) => (
            <Form>
              <MuiTheme>
                <Container maxWidth="sm">
                  <Box sx={{ mx: 2, my: 4, p: 4 }}>
                    <TextField
                      id="filled-basic"
                      label="Enter your email address"
                      variant="filled"
                      type="email"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box sx={{ mx: 2, my: 4, p: 4 }}>
                    <TextField
                      id="filled-basic"
                      label="Enter your password"
                      variant="filled"
                      type="password"
                      fullWidth
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
                      >
                        Reset
                      </Box>
                    </Typography>
                  </Box>

                  <Box sx={{ mx: 2, my: 4, p: 4 }}>
                    <Button variant="contained" fullWidth>
                      Login In
                    </Button>
                  </Box>
                </Container>
              </MuiTheme>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
