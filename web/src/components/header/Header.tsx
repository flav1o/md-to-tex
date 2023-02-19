import React, { FC } from "react";
import { Box, Button, Grid } from "@mui/material";
import HeaderStyles from "./Header.styles";
import { PropTypes } from "./Header.types";
import DownloadIcon from "@mui/icons-material/Download";

const Header: FC<PropTypes> = ({ onDownloadPdf }) => {
  const { header } = HeaderStyles();

  return (
    <Grid item xs className={header}>
      <Button startIcon={<DownloadIcon />} onClick={onDownloadPdf}>
        PDF
      </Button>
    </Grid>
  );
};

export { Header };
