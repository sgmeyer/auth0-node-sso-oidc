var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('user', { user: req.user });
});

// This endpoint needs an additional audience to work.  So, it calls https://{your-tenant}.auth0.com/authorize?audience=https%3A%2F%2Fshawnmeyer.com&prompt=none&response_type=code&redirect_uri=http%3A%2F%2Fiafc.local%3A3000%2Fcallback&scope=openid%20profile%20email%20read%3Ausers&state=THlv0wq0XFBLSZBNY0yevYEP&client_id=d6LHy8vFi09Fur49VOv8UWvWQXnKdhEa
// this ensures the user is logged in and it is authorized to operate on this audience with these scopes.
router.get('/profile', ensureLoggedIn, passport.authorize('auth0', { audience: 'https://shawnmeyer.com', scope: 'openid profile email read:users', prompt: 'none'}), function(req, res, next) {
  res.render('user', { user: req.user });
});

module.exports = router;
