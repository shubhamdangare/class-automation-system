"use strict";
exports.__esModule = true;
var path = require("path");
var express = require('express');
var allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.port = 4200;
        this.app = express();
        this.app.get('/api', function (req, res) { return res.json({
            application: 'Hello World'
        }); });
        this.app.get('*', function (req, res) {
            if (allowedExt.filter(function (ext) { return req.url.indexOf(ext) > 0; }).length > 0) {
                res.sendFile(path.resolve("dist/MarvellousInfosystems/" + req.url));
            }
            else {
                res.sendFile(path.resolve('dist/MarvellousInfosystems/index.html'));
            }
        });
        this.app.listen(this.port, function () { return console.log("http server started at port " + _this.port); });
    }
    Server.bootstrap = function () {
        return new Server();
    };
    return Server;
}());
var server = Server.bootstrap();
exports["default"] = server.app;
