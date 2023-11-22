const Joi = require("joi");

const validateContacts = (contacts) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

  return schema.validate(contacts);
};

module.exports = validateContacts;
