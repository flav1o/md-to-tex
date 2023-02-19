import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const MarkdownEditorStyles = makeStyles((theme: Theme) => ({
  editor: {
    width: "100%",
    overflowY: "auto",
    resize: "none",
    padding: theme.spacing(2),
    outline: 0,
    border: 0,
  },
}));

export default MarkdownEditorStyles;
