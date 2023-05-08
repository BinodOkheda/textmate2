// const express = require("express");
// const { UserModel } = require("../models/user.model");
// const app = express();
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken");
// const githubRouter = express.Router()

// app.use(express.json());
// require("dotenv").config()



// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// const session = require('express-session');
// const passport = require('passport');

// GITHUB_CLIENT_ID = '45f1ae73c281b43ca8a8'
// GITHUB_CLIENT_SECRET = '4fbaf6072fc8ac2166f4f4c095d700fc28ec3dcb'
// GITHUB_CALLBACK_URL =' http://localhost:8080/auth/github/callback'
// // SESSION_SECRET = your_session_secret

// const GitHubStrategy = require('passport-github').Strategy;

// passport.use(new GitHubStrategy({
//     clientID: GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// githubRouter.get('/auth/github',
//   passport.authenticate('github'));

// githubRouter.get('/auth/github/callback', 
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });


// githubRouter.get("/", (req, res) => {
//     res.send("base end point")
// })

// githubRouter.get("/login", (req, res) => {
//     res.sendFile(__dirname + "..../Frontend/index.html")
// })

// githubRouter.get("/auth/github", async (req, res) => {
//     const {code} = req.query
//     console.log(code)
//     const accessToken = await fetch("https://github.com/login/oauth/access_token", {
//         method : "POST",
//         headers : {
//             Accept : "application/json",
//             "content-type" : "application/json"
//         },
//         body : JSON.stringify({
//             client_id : client_id,
//             client_secret : client_secret,
//             code
//         })
//     }).then((res) => res.json())

//     const user = await fetch("https://api.github.com/user", {
//             headers : {
//                 Authorization : `Bearer ${accessToken.access_token}`
//             }
//     })
//     .then((res) => res.json())
//     .catch((err) => console.log(err))

//     console.log(user)

//     const useremailis = await fetch("https://api.github.com/user/emails", {
//         headers : {
//             Authorization : `Bearer ${accessToken.access_token}`
//         }
//     })
//     .then((res) => res.json())
//     .catch((err) => console.log(err))

//     console.log(useremailis)

//     res.send("Sign in with Github successfull")
// })

