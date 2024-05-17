let validator=require('validator');
let rec= require('./print');
console.log(rec(5));
console.log(validator.isEmail("abs@test.com"));