const figlet = require("figlet");

figlet("Hello Rahul \n from inside \n the folder!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});