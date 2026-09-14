import { sendError } from "../utils/apiResponse.js";

const errorHandler = (err, req, res, _next) => {
  console.error("💥 Error:", err.message);
  sendError(res, "Something went wrong on the server. Please try again.", 500);
};

export default errorHandler;