import React, { FC, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { ProcessorService } from "~/service";
import { PropTypes } from "./LatexPreviewer.types";
import LatexPreviewerStyles from "./LatexPreviewer.styles";

const LatexPreviewer: FC<PropTypes> = ({
  markdownFromEditor,
  previewerRef,
}) => {
  const { container } = LatexPreviewerStyles();
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    ProcessorService.astToHtml(markdownFromEditor)
      .then((html) => setHtml(html))
      .catch((err) => console.log(err));
  }, [markdownFromEditor]);

  return (
    <>
      <div
        ref={previewerRef}
        className={container}
        id="dynamic-html"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html),
        }}
      />
    </>
  );
};

export { LatexPreviewer };
