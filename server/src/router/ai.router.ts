import express from "express";
import { AiController } from "../controller/ai.controller";

const router = express.Router();

router.get("/", AiController.generateText);

export { router as AiRouter };
