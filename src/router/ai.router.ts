import express from "express";
import * as AiController from "../controller/ai.controller";

const router = express.Router();

router.get("/", AiController.generateEmail);

export default router;
