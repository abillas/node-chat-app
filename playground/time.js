var moment = require("moment");

// var date = new Date();
// console.log(date.getMonth);

var date = moment();
console.log(date.format("Do MMM,YYYY"));

var date = moment();
console.log(date.format("k:mm a"));
