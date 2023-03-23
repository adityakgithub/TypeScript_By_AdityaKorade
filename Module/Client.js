"use strict";
exports.__esModule = true;
var Server_1 = require("./Server");
main();
function main() {
    var x = 11;
    var y = 20;
    var ret = 0;
    ret = Server_1.Addition(x, y);
    console.log("Addition is :", ret);
}
