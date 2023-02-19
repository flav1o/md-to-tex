import { Request, Response } from "express";
import { ERROR } from "../core/errors";
import { ParserService } from "../service/parser.service";

const ParserController = {
  htmlToLatex: async (req: Request, res: Response) => {
    const { html } = req.body;
    if (!html) return res.status(400).send({ error: ERROR.NO_HTML_PROVIDED });

    try {
      const response = await ParserService.htmlToLatex(html);
      return res.send(response);
    } catch (e: any) {
      return res.status(500).send({ error: ERROR.PARSER });
    }
  },
};

export { ParserController };
