const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
// const {authMiddleware} = require("middleware/authMiddleware");

// Functions Vars Goes Here
const {login} = require("./controllers/login");

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();
app.use(cors({origin: true}));

app.post("/login", login);

// Adding the Functions. Route Will Be Https://url/api/route
const api = functions.https.onRequest(app);

// Exporting the Functions
module.exports = {
  api,
};

// ...require("./controllers/user"),

// firebase serve --only functions
