import ENV_VARIABLES from "../config/env";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: ENV_VARIABLES.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateText = async (prompt: string) => {
	const response = await openai.createCompletion({
		prompt,
		top_p: 1,
		temperature: 0.9,
		max_tokens: 400,
		presence_penalty: 0.6,
		frequency_penalty: 0.0,
		model: "text-davinci-003",
		stop: [" Human:", " AI:"],
	});

	return response.data.choices[0].text;
};

export default generateText;
