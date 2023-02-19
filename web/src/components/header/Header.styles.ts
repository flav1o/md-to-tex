import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const HeaderStyles = makeStyles((theme: Theme) => ({
  header: {
    width: "100%",
    height: "7vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: `0 ${theme.spacing(2)}`,
  },
}));

export default HeaderStyles;
