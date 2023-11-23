const { HttpError, validateContacts } = require("../helpers");

const validateBody = (message) => {
  const func = (req, res, next) => {
    const { error } = validateContacts(req.body);
    if (error) {
      next(HttpError(400, message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
