import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  console.log(field.value);
  console.log(meta);
  console.log(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "filled",
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <div>
      <TextField {...configTextfield} />
    </div>
  );
};

export default TextfieldWrapper;