const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require("./properties").DB;

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = function () {
    mongoose.connect(dbURL,{useNewUrlParser:true, useCreateIndex:true});

    mongoose.connection.on('connected', function () {
        console.log(connected("Mongoose connection is open to ", dbURL));
    });

    mongoose.connection.on('error', function (err) {
        console.log(error("Mongoose default connection has occured " + err + " error"));
    });

    mongoose.connection.on('disconnected', function () {
        console.log(disconnected("Mongoose default connection is disconnected"));
    });
}                                                                                       