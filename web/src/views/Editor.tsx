import React, { useCallback, useRef, useState } from "react";
import { Button, Grid } from "@mui/material";
import { PdfService } from "~/service/pdf.service";
import { INITIAL_VALUE } from "~/constants/editor.constants";
import { Header, LatexPreviewer, MarkdownEditor } from "~/components";

const Editor = () => {
  const [markdown, setMarkdown] = useState<string>(INITIAL_VALUE);
  const previewerRef = useRef(null);

  const handlePrint = useCallback(() => {
    PdfService.handlePrint(previewerRef);
  }, []);

  return (
    <>
      <Header onDownloadPdf={handlePrint} />
      <Grid item xs sx={{ height: "100vh" }} display="flex">
        <Grid
          item
          xs={6}
          display="flex"
          flex={1}
          sx={{ border: "1px solid black", borderRight: 0 }}
        >
          <MarkdownEditor onEdit={(content: string) => setMarkdown(content)} />
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flex={1}
          sx={{ border: "1px solid black" }}
        >
          <LatexPreviewer
            markdownFromEditor={markdown}
            previewerRef={previewerRef}
          />
        </Grid>
      </Grid>
    </>
  );
};

export { Editor };
