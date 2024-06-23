const Chat = require("../models/chat.js");
const indexChat = async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
};

const rendernewChatForm = (req, res) => {
  res.render("newChat.ejs");
};

const newChat = (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
};

const renderUpdateChatForm = async (req, res) => {
  let { id } = req.params;
  //   console.log(id);
  let chat = await Chat.findById(id);
  //   console.log(chat);
  res.render("edit.ejs", { chat });
};

const updateChat = async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;

  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
};

const deleteChat = async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
};

module.exports = {
  indexChat,
  rendernewChatForm,
  newChat,
  renderUpdateChatForm,
  updateChat,
  deleteChat,
};
