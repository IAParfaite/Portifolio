import { Router } from "express";
import { createContact } from "../controllers/contact.controller.js";
import validate from "../middleware/validate.middleware.js";

const router = Router();

router.post("/", validate(["name", "email", "message"]), createContact);

export default router;
