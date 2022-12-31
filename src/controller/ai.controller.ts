import { Request, Response } from "express";
import generateText from "../service/ai.service";

const generateEmail = async (req: Request, res: Response) => {
	const aiGeneratedText = await generateText("talk about dogs");
	return res.status(200).send(aiGeneratedText);
};

export { generateEmail };
