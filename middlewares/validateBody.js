const { HttpError } = require("../helpers");
const { validateContacts } = require("../models/contacts");

const validateBody = () => {
  const func = (req, res, next) => {
    const { error } = validateContacts(req.body);
    const bodyKeys = Object.keys(req.body);

    if (bodyKeys.length === 0) {
      return next(HttpError(400, "missing fields"));
    }

    if (error) {
      return next(
        HttpError(400, `missing required ${error.details[0].path[0]} field`)
      );
    }
    next();
  };
  return func;
};

module.exports = validateBody;
