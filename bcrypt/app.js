const bcrypt = require("bcryptjs");
bcrypt.genSalt(10, function (err, salt) {
  bcrypt.hash("s90909", salt, function (err, hash) {
    // Store hash in your password DB.
    console.log(salt);
    console.log(hash);

    bcrypt.compare("s90909", hash, function (err, res) {
      console.log(res);
    });
  });
});
