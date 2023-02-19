import { ERROR } from "../core/errors";
import { Request, Response } from "express";
import { AiService } from "../service/ai.service";

const AiController = {
  generateText: async (req: Request, res: Response) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).send({ error: ERROR.NO_PROMPT });

    const response = await AiService.generateText(prompt);
    return res.send(response);
  },
};

export { AiController };
