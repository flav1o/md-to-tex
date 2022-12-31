import { Request, Response } from "express";
import generateText from "../service/ai.service";

const generateEmail = async (req: Request, res: Response) => {
	const { prompt } = req.body;
	if (!prompt) return res.status(400).send({ error: "No prompt provided" });

	const response = await generateText(prompt);
	return res.send(response);
};

export { generateEmail };
