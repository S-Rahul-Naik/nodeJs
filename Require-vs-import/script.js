import{sum,PI,mul,sub} from './math.js';
import { generate, count } from "random-words";


// const { sum, PI, mul, sub } = require("./math.js");
console.log(sum(2,3));
console.log(PI);
console.log(mul(2,2));
console.log(sub(5,3));


// const { generate, count } = require("random-words");
console.log(generate());
console.log(count());


// import figlet from "figlet";
import figlet from "figlet";

figlet("Hello Rahul \n from outside \n the folder!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});