import React from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormikContext } from "formik";

export const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
    resetForm();
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export const LoadingButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();

    setTimeout(() => {
      resetForm();
    }, 1500);
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    loadingPosition: "end",
    onClick: handleSubmit,
  };

  return <LoadingButton {...configButton}>{children}</LoadingButton>;
};
