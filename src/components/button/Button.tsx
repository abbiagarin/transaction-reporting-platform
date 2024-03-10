import React, { ReactNode, ButtonHTMLAttributes } from "react";
import {
  Button,
  ButtonProps,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
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

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  ...otherProps
}) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
    resetForm();
  };

  const configButton: ButtonProps = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export const SelectBankButton = () => {
  const [selectedBanks, setSelectedBanks] = React.useState<string[]>([]);

  const options = ["All Banks", "Access", "Eco"];
  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const value = event.target.value;
    console.log(value);

    setSelectedBanks(Array.isArray(value) ? value : [value as string]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 90 }}>
        {/* <InputLabel
          id="bankName"
          sx={{ my: -1.5, fontFamily: "Roboto", fontSize: "14px" }}
        >
          Banks
        </InputLabel> */}
        <Select
          value={selectedBanks}
          onChange={handleChange}
          labelId="bankName"
          id="bankName"
          displayEmpty
        >
          {options.map((bank, i) => (
            <MenuItem key={i} value={bank}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  color: "#737373",
                }}
              >
                {bank}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
