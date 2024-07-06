const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODZkYTU3ZDZjMWE2MDM5MDAyZDljMCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIwMTEzNzUxfQ.CEXfV9wAy_g4EnVoSxsei2J9Afw_1MaipyNd02ANP8c";
  return token;
};
