import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { PaperContentProps, CustomCardProps } from "./type/type";

const PaperContent: React.FC<PaperContentProps> = ({
  header,
  body,
  footer,
}) => {
  return (
    <div>
      {header && (
        <Typography variant="body1" sx={{ fontSize: 12, py: 0.5 }}>
          {header}
        </Typography>
      )}
      {body && (
        <Typography variant="h5" sx={{ fontSize: 14, py: 0.5 }}>
          {body}
        </Typography>
      )}
      {footer && (
        <Typography variant="caption" sx={{ fontSize: 9, py: 0.5 }}>
          {footer}
        </Typography>
      )}
    </div>
  );
};

const CustomCard: React.FC<CustomCardProps> = ({
  papers,
  ...otherGridProps
}) => {
  return (
    <Grid container spacing={6} {...otherGridProps}>
      {papers.map((paper, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
          <Paper
            {...paper}
            sx={{ p: 2, boxShadow: "1px 1px 1px 0.5px rgba(0, 0, 0, 0.1)" }}
          >
            <PaperContent {...paper} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomCard;
