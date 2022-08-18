const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const https = require("https");
const ejs = require("ejs");
const _ = require("lodash");
const { text } = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static("public"));
const posts = [];
const homeStartingContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, ipsam magni, deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, deserunt magnam ratione omnis veritatis cupiditate similique doloremquemagnam ratione omnis veritatis cupiditate similique doloremque consequatur unde eaque dignissimos earum asperiores modi!";
const aboutContent =
  "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni,  consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, deserunt magnam ratione omnis veritatis cupiditate similique doloremque consequatur unde eaque dignissimos earum asperiores modi!";
const contactContent =
  "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni,  amet consectetur adipisicing elit. Maxime, repudiandae aliquam! Illum in ipsam magni, deserunt magnam ratione omnis veritatis cupiditate similique doloremque consequatur unde eaque dignissimos earum asperiores modi!";
app.get("/", (req, res) => {
  res.render("home", {
    homeContent: homeStartingContent,
    posts: posts,
  });
});
app.get("/about", (req, res) => {
  res.render("about", { AboutContent: aboutContent });
});
app.get("/contact", (req, res) => {
  res.render("contact", { ContactContent: contactContent });
});
app.get("/compose", (req, res) => {
  res.render("compose");
});
app.post("/compose", (req, res) => {
  const post = {
    inputTitle: req.body.postTitle,
    inputContent: req.body.postContent,
  };
  posts.push(post);
  res.redirect("/");
});
app.get("/posts/:title", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.title);
  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.inputTitle);
    if (storedTitle === requestedTitle) {
      res.render("posts", {
        title: post.inputTitle,
        content: post.inputContent,
      });
    } else {
      console.log("match not found");
    }
  });
});
app.listen("3000", (req, res) => {
  console.log("server is running on port 3000");
});
