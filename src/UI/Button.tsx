import React, { ReactNode, ButtonHTMLAttributes } from "react";
//import { Button, ButtonProps } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import type {} from "@mui/lab/themeAugmentation";
import { useFormikContext } from "formik";

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export const LoadingButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  endIcon,
  loading,
  disabled,
}) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();

    setTimeout(() => {
      resetForm();
    }, 1500);
  };

  const configButton: LoadingButtonProps = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    loadingPosition: "end",
    endIcon: endIcon,
    disabled: disabled,
    loading: loading,
    onClick: handleSubmit,
  };

  return <LoadingButton {...configButton}>{children}</LoadingButton>;
};

// export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
//   children,
//   ...otherProps
// }) => {
//   const { submitForm, resetForm } = useFormikContext();

//   const handleSubmit = () => {
//     submitForm();
//     resetForm();
//   };

//   const configButton: ButtonProps = {
//     ...otherProps,
//     variant: "contained",
//     color: "primary",
//     fullWidth: true,
//     onClick: handleSubmit,
//   };

//   return <Button {...configButton}>{children}</Button>;
// };
