import { app } from "./app";
import ENV_VARIABLES from "./config/env";

const SERVER_PORT = ENV_VARIABLES.SERVER_PORT;

app.get("/", (req, res) => {
	res.status(200).send("RIDEHUB");
});

app.listen(SERVER_PORT, () =>
	console.log(`Server started at port ${SERVER_PORT}`)
);
