const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,

  // addreaction,
  // removereaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// // /api/thoughts/:thoughtId/users
// router.route("/:thoughtId/reaction").post(addreaction);

// // /api/thoughts/:thoughtId/users/:userId
// router.route("/:thoughtId/reactions/:reactionId").delete(removereaction);

module.exports = router;
