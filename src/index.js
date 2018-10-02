"use strict";
exports.__esModule = true;
var Bot_1 = require("./Bot");
var port = process.env.PORT || 3000;
console.log('*** STARTING BOT SERVER ***');
Bot_1["default"].listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("The bot is up and running on port " + port);
});
