import express from "express";
import { ParserController } from "../controller/parser.controller";

const router = express.Router();

router.post("/", ParserController.htmlToLatex);

export { router as ParserRouter };
