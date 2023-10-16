import React from "react";
import MuiTheme from "../../UI/MuiTheme";
import itexLogo from "../../assets/itexLogo.png";
import TextfieldWrapper from "../../UI/TextField";
import { Formik, Form } from "formik";
import {
  Container,
  Box,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { resetFormSchema } from "../../schemas/validationSchema";
import "../../UI/FormStyleSheet.scss";

const initialValues = {
  email: "",
};

const ResetForm = () => {
  const navigate = useNavigate();

  return (
    <MuiTheme>
      <div className="resetForm__header">
        <img src={itexLogo} alt="itexLogo" className="resetForm__itexLogo" />

        <Typography variant="h4" gutterBottom>
          Forgot Password?
        </Typography>

        <p>Reset your password to regain access to your account.</p>
      </div>

      <div className="resetForm__control">
        <Formik
          initialValues={initialValues}
          validationSchema={resetFormSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <Container maxWidth="sm">
              <Box sx={{ mx: 2, my: 2, p: 4 }}>
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

              <Box sx={{ mx: 2, my: 2, p: 4 }}>
                <Button variant="contained" type="submit" fullWidth>
                  Reset
                </Button>
              </Box>

              <Box sx={{ mx: 2 }}>
                <Typography variant="body2" gutterBottom>
                  Remember your password?
                  <Box
                    component="span"
                    sx={{ ml: 1, color: "primary.main" }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Box>
                </Typography>
              </Box>
            </Container>
          </Form>
        </Formik>
      </div>
    </MuiTheme>
  );
};

export default ResetForm;
