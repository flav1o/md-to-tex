import { HTTP_CLIENT } from "~/core/http";

const LatexService = {
  parseHtmlToLatex: async (html: string) => {
    return await HTTP_CLIENT.post("/parser", {
      html,
    });
  },
};

export { LatexService };
