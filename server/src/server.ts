import { app } from "./app";
import ENV_VARIABLES from "./config/env";

const SERVER_PORT = ENV_VARIABLES.SERVER_PORT;

const serverListener = () =>
	app.listen(SERVER_PORT, () =>
		console.log(`Server started at port ${SERVER_PORT}`)
	);

export default serverListener;
