import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const MarkdownEditorStyles = makeStyles((theme: Theme) => ({
  editor: {
    width: "100%",

    maxHeight: "100vh",
    overflowY: "auto",
    resize: "none",
  },
}));

export default MarkdownEditorStyles;
