"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var RequestProcessor_1 = require("framework/RequestProcessor");
var mutations_1 = require("@tamura/backendlib/graphql/mutations");
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.parametersValid = function () {
        throw new Error("Method not implemented.");
    };
    Main.prototype.main = function () {
        throw new Error("Method not implemented.");
        var query = (0, graphql_tag_1["default"])(mutations_1.createTodo);
        console.log(query);
    };
    Main.prototype.catchError = function (error) {
        throw new Error("Method not implemented.");
    };
    return Main;
}(RequestProcessor_1.AbstractRequestProcessor));
