const express = require("express");
const {
  getAll,
  getById,
  add,
  removeById,
  updateById,
} = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody("missing required name field"), add);

router.delete("/:contactId", removeById);

router.put("/:contactId", validateBody("missing fields"), updateById);

module.exports = router;
