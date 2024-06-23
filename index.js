const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const methodOverride = require("method-override");
const router = require("./router/chat.js");

const app = express();
const port = 8080;

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/chats", router);

main()
  .then(() => {
    console.log("connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo_whatsapp");
}


app.listen(port, () => {
  console.log(`server is listening at port: ${port}`);
});
