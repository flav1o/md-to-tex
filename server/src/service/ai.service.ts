import ENV_VARIABLES from "../config/env";
import { Configuration, OpenAIApi } from "openai";
import { ApiResponse } from "../types";

const configuration = new Configuration({
	apiKey: ENV_VARIABLES.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateText = async (prompt: string): Promise<ApiResponse<string>> => {
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

	const data = response?.data?.choices?.[0]?.text;
	if (!data) throw new Error("No data");

	return {
		statusCode: 200,
		body: data,
	};
};

export default generateText;
