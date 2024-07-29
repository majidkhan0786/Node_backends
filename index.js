const express = require("express");
const path = require("path");
const reqFilter = require("./middleware");
const route = express.Router();

const app = express();
// const publicPath = path.join(__dirname, "Public");

// app.set("view engine", "ejs");
// app.get("", (req, res) => {
//   res.send("Hello, this is Home page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello, this is About page");
// });

// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "majidkhan",
//     email: "majdkhan0786@gmail.com",
//     city: "mohali",
//     skills: ["javaScript", "ReactJs", "Next Js"],
//   };
//   resp.render("profile", { user });
// });
// app.use(express.static(publicPath));

// MiddleWare

route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("Welcome to the home Page");
});

app.get("/profile", (req, resp) => {
  resp.send("Welcome to the home Page");
});

// Here we have applied MiddleWare for Particular Route
route.get("/contact", (req, resp) => {
  resp.send("Welcome to the home Page");
});

app.use("/", route);
app.listen(8000);
