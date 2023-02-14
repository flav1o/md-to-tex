import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { PropTypes } from "./LatexPreviewer.types";
import { ProcessorService } from "~/service";
import LatexPreviewerStyles from "./LatexEditor.styles";
import DOMPurify from "dompurify";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Page, Document } from "@react-pdf/renderer";

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
