"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MockResponse = (function () {
    function MockResponse(options) {
        this.isUsingDeepEquals = true;
        if (options === undefined) {
            options = {};
        }
        if (options.expectedSuccess !== undefined && options.expectedError !== undefined) {
            throw Error('cant expect a call to both success and error');
        }
        if (options.isUsingDeepEquals !== undefined) {
            this.isUsingDeepEquals = options.isUsingDeepEquals;
        }
        this.expectedSuccess = options.expectedSuccess;
        this.expectedError = options.expectedError;
    }
    MockResponse.prototype.success = function (argument) {
        if (this.expectedError !== undefined) {
            chai_1.expect.fail('called success when expecting an error');
        }
        else if (this.isUsingDeepEquals) {
            chai_1.expect(argument).to.deep.equal(this.expectedSuccess);
        }
        else {
            chai_1.expect(argument).to.equal(this.expectedSuccess);
        }
    };
    MockResponse.prototype.error = function (message) {
        if (this.expectedSuccess !== undefined) {
            chai_1.expect.fail('called error when expecting a success');
        }
        else {
            chai_1.expect(message).to.equal(this.expectedError);
        }
    };
    return MockResponse;
}());
exports.MockResponse = MockResponse;
;
var MockFunctionResponse = (function (_super) {
    __extends(MockFunctionResponse, _super);
    function MockFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockFunctionResponse;
}(MockResponse));
exports.MockFunctionResponse = MockFunctionResponse;
;
var MockBeforeSaveResponse = (function (_super) {
    __extends(MockBeforeSaveResponse, _super);
    function MockBeforeSaveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockBeforeSaveResponse;
}(MockResponse));
exports.MockBeforeSaveResponse = MockBeforeSaveResponse;
;
var MockBeforeDeleteResponse = (function (_super) {
    __extends(MockBeforeDeleteResponse, _super);
    function MockBeforeDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockBeforeDeleteResponse.prototype.success = function () {
        if (this.expectedError !== undefined) {
            chai_1.expect.fail('called success when expecting an error');
        }
    };
    return MockBeforeDeleteResponse;
}(MockResponse));
exports.MockBeforeDeleteResponse = MockBeforeDeleteResponse;
;
