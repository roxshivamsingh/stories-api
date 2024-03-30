const ENV = require("./config/env");
db.createUser({
  user: ENV.MONGODB_USERNAME,
  pwd: "",
  roles: [
    {
      role: "readWrite",
      db: "stories",
    },
  ],
});
