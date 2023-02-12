import React, { FC } from "react";
import { TextareaAutosize } from "@mui/material";
import { PropTypes } from "./MarkdownEditor.types";
import MarkdownEditorStyles from "./MarkdownEditor.styles";

const MarkdownEditor: FC<PropTypes> = ({ onEdit }) => {
  const { editor } = MarkdownEditorStyles();

  return (
    <TextareaAutosize
      onChange={(e) => onEdit(e.target.value)}
      minRows={100}
      className={editor}
    />
  );
};

export { MarkdownEditor };
