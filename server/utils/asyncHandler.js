// DRY utility — wraps async route handlers so try/catch isn't repeated in controllers.
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
