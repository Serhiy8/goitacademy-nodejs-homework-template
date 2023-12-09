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
  authenticate,
} = require("../../middlewares");
const { schemas } = require("../../models/contacts");
const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), add);

router.delete("/:contactId", authenticate, isValidId, removeById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
