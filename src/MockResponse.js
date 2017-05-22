"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
module.exports = (function () {
    function MockResponse(expectedResult, expectedError) {
        if (expectedResult === void 0) { expectedResult = ''; }
        if (expectedError === void 0) { expectedError = ''; }
        this.expectedResult = expectedResult;
        this.expectedError = expectedError;
    }
    MockResponse.prototype.success = function (result) {
        chai_1.expect(result).to.deep.equal(this.expectedResult);
    };
    MockResponse.prototype.error = function (message) {
        chai_1.expect(message).to.deep.equal(this.expectedError);
    };
    return MockResponse;
}());
