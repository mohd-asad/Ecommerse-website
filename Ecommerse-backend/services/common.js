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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmMyNGIwMTU5MGIxZTc5NmM1YzNkZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM2MzUzNH0.bQ5CqWiSE_hZHt-IVR0XfZlOY56OIx-1XwBLkmvkROk";
  return token;
};
