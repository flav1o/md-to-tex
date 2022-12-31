import express from "express";
import ENV_VARIABLES from "./config/env";

import AiRouter from "./routers/ai.router";

const SERVER_PORT = ENV_VARIABLES.SERVER_PORT;

const app = express();

app.use("/ai", AiRouter);

app.listen(SERVER_PORT, () =>
	console.log(`Server started at port ${SERVER_PORT}`)
);

export { app };
