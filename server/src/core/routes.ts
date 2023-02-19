import { AiRouter } from "../router/ai.router";
import { ParserRouter } from "../router/parser.router";
import { IRoute } from "../types";

const ROUTES: IRoute[] = [
  { name: "/ai", router: AiRouter },
  { name: "/parser", router: ParserRouter },
];

export { ROUTES };
