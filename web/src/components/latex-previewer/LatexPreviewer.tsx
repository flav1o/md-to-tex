import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { PropTypes } from "./LatexPreviewer.types";
import { ProcessorService } from "~/service";
import LatexPreviewerStyles from "./LatexEditor.styles";
import DOMPurify from "dompurify";

const styles = {
  html: {
    color: "#1a202c",
    textAlign: "justify",
    wordWrap: "break-word",
    wordBreak: "break-word",
    hyphens: "auto",
  },
  body: {
    margin: "1.44in",
    fontFamily: '"Source Serif Pro", "Times New Roman", Times, serif',
  },
  a: {
    color: "#2b6cb0",
    textDecoration: "none",
  },
  "a:hover": {
    textDecoration: "underline",
    textDecorationColor: "#bee3f8",
    textUnderlineOffset: "3px",
  },
  blockquote: {
    margin: "1em 2.5em",
  },
  q: {
    fontStyle: "italic",
  },
  code: {
    background: "#edf2f7",
    padding: "0 0.2em",
    borderRadius: "0.125em",
  },
  figure: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5em",
    margin: "1em 2.5em",
  },
};

const LatexPreviewer: FC<PropTypes> = ({ markdownFromEditor }) => {
  const { container } = LatexPreviewerStyles();
  const [html, setHtml] = useState("");

  useEffect(() => {
    console.log("changed");
    ProcessorService.astToHtml(markdownFromEditor)
      .then((html) => setHtml(html))
      .catch((err) => console.log(err));
  }, [markdownFromEditor]);

  return (
    <div
      className={container}
      id="dynamic-html"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};

export { LatexPreviewer };
