"use strict";
exports.__esModule = true;
var express = require("express");
var Bot = /** @class */ (function () {
    function Bot() {
        this.express = express();
        this.setEndpoints();
    }
    Bot.prototype.setEndpoints = function () {
        var router = express.Router();
        router.get('/probe/ready', function (req, res) {
            console.log('/probe/ready OK');
            res.sendStatus(200);
        });
        router.get('/probe/alive', function (req, res) {
            console.log('/probe/alive OK');
            res.sendStatus(200);
        });
        router.post('/exit', function (req, res) {
            console.log('/exit OK');
            res.sendStatus(200);
        });
        router.post('/turn', function (req, res) {
            console.log('/turn OK');
            res.sendStatus(200);
        });
        this.express.use('/', router);
    };
    return Bot;
}());
exports["default"] = new Bot().express;
