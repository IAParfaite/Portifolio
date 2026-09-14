import { sendSuccess, sendError } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import Contact from "../models/contact.model.js";
import { sendContactNotification } from "../services/email.service.js";

// In-memory fallback when MongoDB is not configured
const memoryStore = [];

// POST /api/contact — save submission + optional email notification
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  // Validate existence is handled by middleware; guard against missing DB here.
  try {
    let saved = null;
    if (process.env.MONGODB_URI) {
      saved = await Contact.create({ name, email, message });
    } else {
      memoryStore.push({ name, email, message, createdAt: new Date() });
    }

    await sendContactNotification({ name, email, message });

    return sendSuccess(
      res,
      { message: "Thanks — your message is on its way. I'll get back to you soon.", id: saved ? saved._id : null },
      201
    );
  } catch (error) {
    return sendError(res, error.message, 500);
  }
});