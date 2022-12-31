import express from "express";
import ENV_VARIABLES from "./config/env";
import AiRouter from "./router/ai.router";
import notFound from "./middleware/fourofour.middleware";
import serverListener from "./server";

const SERVER_PORT = ENV_VARIABLES.SERVER_PORT;

const app = express();
app.use(express.json());

app.use("/ai", AiRouter);
app.use(notFound);

serverListener();

export { app };
