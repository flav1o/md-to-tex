import express from "express";
import serverListener from "./server";
import notFound from "./middleware/fourofour.middleware";
import { ROUTES } from "./core/routes";

const app = express();
app.use(express.json());

ROUTES.forEach(({ name, router }) => {
  return app.use(name, router);
});

app.use(notFound);

serverListener();

export { app };
