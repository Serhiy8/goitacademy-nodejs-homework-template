const { HttpError } = require("../helpers");

const validateBodyFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const bodyKeys = Object.keys(req.body);
    if (bodyKeys.length === 0) {
      return next(HttpError(400, "missing field favorite"));
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

module.exports = validateBodyFavorite;
