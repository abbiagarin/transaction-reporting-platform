import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { PaperContentProps, CustomCardProps } from "./type/type";

const PaperContent: React.FC<PaperContentProps> = ({
  header,
  body,
  footer,
}) => {
  return (
    <>
      {header && <Typography variant="body2">{header}</Typography>}
      {body && <Typography variant="h6">{body}</Typography>}
      {footer && (
        <Typography variant="caption" align="center">
          {footer}
        </Typography>
      )}
    </>
  );
};

const CustomCard: React.FC<CustomCardProps> = ({
  papers,
  ...otherGridProps
}) => {
  return (
    <Grid container spacing={2} {...otherGridProps}>
      {papers.map((paper, i) => (
        <Grid item key={i} xs={12} sm={6} md={3}>
          <Paper {...paper} elevation={2} sx={{ p: 2 }}>
            <PaperContent {...paper} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomCard;
