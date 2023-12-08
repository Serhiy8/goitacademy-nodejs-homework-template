const express = require("express");
const {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  updateStatusContact,
} = require("../../controllers/contacts");
const {
  validateBody,
  isValidId,
  validateBodyFavorite,
} = require("../../middlewares");
const { schemas } = require("../../models/contacts");
const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), add);

router.delete("/:contactId", isValidId, removeById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
