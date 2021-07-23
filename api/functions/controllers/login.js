const firebase = require("firebase");
const {validateLoginData} = require("../utils/validators");
const config = require("../config");

// Need to injitialize this in order for the login to work
firebase.initializeApp(config);

// Login Function to Authenticate
exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const {valid, errors} = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data.user.userHandle);
        return data.user.getIdToken();
      })
      .then((token) => {
        return res.json({token});
      })
      .catch((err) => {
        console.error(err);

        return res
            .status(403)
            .json({general: "Wrong credentials. Please try again"});
      });
};
