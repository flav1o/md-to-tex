import React, { useState } from "react";
import { Grid } from "@mui/material";
import { LatexPreviewer, MarkdownEditor } from "~/components";

const Editor = () => {
  const [markdown, setMarkdown] = useState<string>(
    `# $LATEX$ \n is boring ... but _md_ is **not!**`
  );

  return (
    <Grid item xs sx={{ height: "100vh" }} display="flex">
      <Grid item xs={6} display="flex" flex={1}>
        <MarkdownEditor onEdit={(content: string) => setMarkdown(content)} />
      </Grid>
      <Grid item xs={6} display="flex" flex={1}>
        <LatexPreviewer markdownFromEditor={markdown} />
      </Grid>
    </Grid>
  );
};

export { Editor };
