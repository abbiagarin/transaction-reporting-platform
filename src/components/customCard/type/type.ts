import { ReactNode } from "react";
import { GridProps, PaperProps } from "@mui/material";

export interface PaperContentProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

export interface CustomCardProps extends GridProps {
  papers: (PaperContentProps & PaperProps)[];
}
