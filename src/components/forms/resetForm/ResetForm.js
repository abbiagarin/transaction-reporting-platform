import React from "react";
import { Formik, Form } from "formik";
import {
  Container,
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import MuiTheme from "../formStylesheet/MuiTheme";
import { Email } from "@mui/icons-material";
import itexLogo from "../../../assets/itexLogo.png";
import "../formStylesheet/FormStyleSheet.scss";

const initialValues = {
  email: "",
};

const ResetForm = () => {
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
        <Formik initialValues={initialValues}>
          {(props) => (
            <Form>
              <Container maxWidth="sm">
                <Box sx={{ mx: 2, my: 2, p: 4 }}>
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

                <Box sx={{ mx: 2, my: 2, p: 4 }}>
                  <Button variant="contained" fullWidth>
                    Reset
                  </Button>
                </Box>

                <Box sx={{ mx: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Remember your password?
                    <Box component="span" sx={{ ml: 1, color: "primary.main" }}>
                      Login
                    </Box>
                  </Typography>
                </Box>
              </Container>
            </Form>
          )}
        </Formik>
      </div>
    </MuiTheme>
  );
};

export default ResetForm;
