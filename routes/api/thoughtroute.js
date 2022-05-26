const router = require("express").Router();
const {
  getthought,
  getSinglethought,
  createthought,
  updatethought,
  deletethought,
  adduser,
  removeuser,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSinglethought)
  .put(updatethought)
  .delete(deletethought);

// /api/thoughts/:thoughtId/users
router.route("/:thoughtId/users").post(adduser);

// /api/thoughts/:thoughtId/users/:userId
router.route("/:thoughtId/users/:userId").delete(removeuser);

module.exports = router;
