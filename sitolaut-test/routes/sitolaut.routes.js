import express from "express";
import { sendDataSitolaut } from "../controller/sitolaut.controller.js";

const router = express.Router();

router.post("/sendDataSitolaut", sendDataSitolaut);

export default router;
