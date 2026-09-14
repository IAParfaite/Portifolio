// DRY utility — consistent response shape across every controller.
export const sendSuccess = (res, data = {}, status = 200) =>
  res.status(status).json({ success: true, ...data });

export const sendError = (res, message, status = 400, errors) => {
  const body = { success: false, message };
  if (errors) body.errors = errors;
  return res.status(status).json(body);
};
