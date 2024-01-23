const app = require("./app");
require("./db/db");


// firing server from here ..
let server = app.listen(4000, () => {
  console.log("server listening success ...");
});
