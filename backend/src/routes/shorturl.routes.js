// Express modules
import { Router } from "express";

// Controller Logics
import { convertToShortURL } from "../controllers/shorturl.controller.js";

// Initialized express router for Short URL functionalities
const router = Router();

// Routes
router.post('/create', convertToShortURL);

export default router;