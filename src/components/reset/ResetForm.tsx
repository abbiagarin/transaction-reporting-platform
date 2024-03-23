import React from "react";
import MuiTheme from "components/muiTheme/MuiTheme";
import itexLogo from "assets/img/itexLogo.png";
import TextfieldWrapper from "components/muiTextField/TextField";
import { useNavigate } from "react-router-dom";
import { LoadingButtonWrapper } from "components/button/Button";
import { Formik, Form } from "formik";
import { Container, Box, InputAdornment, Typography } from "@mui/material";
import { Email, ArrowRightAlt } from "@mui/icons-material";
import { resetFormSchema } from "schemas/validationSchema";
import "../formStyleSheet/FormStyleSheet.scss";

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

        <Typography variant="body2">
          Reset your password to regain access to your account.
        </Typography>
      </div>

      <div className="resetForm__control">
        <Formik
          initialValues={initialValues}
          validationSchema={resetFormSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ isValid, isSubmitting, dirty, values }) => (
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
                          <Email sx={{ cursor: "default" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mx: 2, my: 2, p: 4 }}>
                  <LoadingButtonWrapper
                    endIcon={<ArrowRightAlt sx={{ color: "#fff" }} />}
                    loading={isSubmitting}
                    disabled={isSubmitting || !isValid || !dirty || !values}
                  >
                    <span>Reset</span>
                  </LoadingButtonWrapper>
                </Box>

                <Box sx={{ mx: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Remember your password?
                    <Box
                      component="span"
                      sx={{ ml: 1, color: "primary.main", cursor: "pointer" }}
                      onClick={() => navigate("/login")}
                    >
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
