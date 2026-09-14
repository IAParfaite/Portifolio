// DRY validation rules — a single map used by the reusable validate() middleware.
const rules = {
  name: (value) => (!value || value.trim().length < 2 ? "Please enter your name." : null),
  email: (value) => (!value || !/^\S+@\S+\.\S+$/.test(value) ? "Please enter a valid email address." : null),
  message: (value) => (!value || value.trim().length < 10 ? "Message should be at least 10 characters." : null),
};

// Reusable middleware — specify which fields to validate: validate(["name", "email", "message"])
const validate = (fields) => (req, res, next) => {
  const errors = {};
  for (const field of fields) {
    const error = rules[field]?.(req.body?.[field]);
    if (error) errors[field] = error;
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, message: "Validation failed", errors });
  }
  return next();
};

export default validate;
