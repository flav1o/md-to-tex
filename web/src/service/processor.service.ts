import React from "react";
import { merge } from "lodash";
import { unified } from "unified";
import ReactDOMServer from "react-dom/server";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkSlug from "remark-slug";
import remarkParse from "remark-parse";
import remarkRehype, { Processor } from "remark-rehype";
import remarkDirective from "remark-directive";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import rehypeKatex from "rehype-katex";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

const ProcessorService = {
  astToHtml: (markdownText: string): Promise<string> => {
    const processor = ProcessorService.processorSetup();

    return processor.process(markdownText).then((processedFile) => {
      const renderedHtml = ReactDOMServer.renderToStaticMarkup(
        processedFile.result as JSX.Element
      );

      return renderedHtml;
    });
  },
  processorSetup: (): Processor => {
    return unified()
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkGfm)
      .use(remarkDirective)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeKatex)
      .use(
        rehypeSanitize,
        merge(defaultSchema, {
          attributes: { "*": ["className", "style"] },
          clobberPrefix: "",
        })
      )
      .use(rehypeReact, {
        createElement: React.createElement,
        Fragment: React.Fragment,
      });
  },
};

export { ProcessorService };
