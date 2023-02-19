const { convertText } = require("html-to-latex");

// When i have time i will make a parser

const ParserService = {
  htmlToLatex: async (html: string) => {
    try {
      const parsed = await convertText(html);

      return {
        statusCode: 200,
        body: parsed,
      };
    } catch (e) {
      throw e;
    }
  },
};

export { ParserService };
