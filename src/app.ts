import express from "express";
import AiRouter from "./router/ai.router";
import notFound from "./middleware/fourofour.middleware";
import serverListener from "./server";

const app = express();
app.use(express.json());

app.use("/ai", AiRouter);
app.use(notFound);

serverListener();

export { app };
