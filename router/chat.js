const express = require("express");
const router = express.Router();

const {
  indexChat,
  newChat,
  rendernewChatForm,
  updateChat,
  renderUpdateChatForm,
  deleteChat,
} = require("../controller/chats");

// index route and new chat router
router.route("/")
.get(indexChat)
.post(newChat);

// new chat form render route
router.get("/new", rendernewChatForm);

// update route
router.get("/:id/edit", renderUpdateChatForm);

// update and delete router
router.route("/:id")
.put(updateChat)
.delete(deleteChat);

module.exports = router;
