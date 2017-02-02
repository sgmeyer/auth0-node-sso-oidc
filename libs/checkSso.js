// var rp = require('request-promise');

// module.exports.checkSso = () => {

//   const env = {
//     AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
//     AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
//     AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
//   };

//   const ssoUrl = `https://${AUTH0_DOMAIN}.auth0.com/user/ssodata`;
  
//   rp.get(ssoUrl)
//     .then()
//     .error();
// }