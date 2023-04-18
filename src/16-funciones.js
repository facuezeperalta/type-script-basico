"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//datefns
var date_fns_1 = require("date-fns");
var date = new Date(1995, 5, 19);
var rta = (0, date_fns_1.subDays)(date, 1);
var convertedDate = (0, date_fns_1.format)(rta, 'YYYY-MM-DD');
console.log(convertedDate);
