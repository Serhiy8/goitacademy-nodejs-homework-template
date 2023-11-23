const { HttpError, validateContacts } = require("../helpers");

const validateBody = () => {
  const func = (req, res, next) => {
    const { error } = validateContacts(req.body);

    if (error) {
      next(HttpError(400, "missing fields"));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
