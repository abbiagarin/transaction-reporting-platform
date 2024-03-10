import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

interface TextfieldWrapperProps {
  name: string;
  error: boolean;
  helperText: string;
}

const TextfieldWrapper: React.FC<
  Omit<TextfieldWrapperProps, "error" | "helperText"> & Record<string, any>
> = ({ name, error, helperText, ...otherProps }) => {
  return (
    <div>
      {/* Use the Field component from Formik */}
      <Field name={name}>
        {({ field, meta }: { field: any; meta: any }) => (
          <TextField
            {...field}
            {...otherProps}
            fullWidth
            variant="filled"
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : helperText}
          />
        )}
      </Field>
    </div>
  );
};

export default TextfieldWrapper;
