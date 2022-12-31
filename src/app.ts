import express from "express";
import serverListener from "./server";
import AiRouter from "./router/ai.router";
import notFound from "./middleware/fourofour.middleware";

const app = express();
app.use(express.json());

app.use("/ai", AiRouter);
app.use(notFound);

serverListener();

export { app };
