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
var MockFunctionRequest_1 = require("./MockFunctionRequest");
var MockFunctionResponse_1 = require("./MockFunctionResponse");
var MockTriggerRequest_1 = require("./MockTriggerRequest");
var Mock;
(function (Mock) {
    var FunctionRequest = (function (_super) {
        __extends(FunctionRequest, _super);
        function FunctionRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FunctionRequest;
    }(MockFunctionRequest_1.MockFunctionRequest));
    Mock.FunctionRequest = FunctionRequest;
    ;
    var FunctionResponse = (function (_super) {
        __extends(FunctionResponse, _super);
        function FunctionResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FunctionResponse;
    }(MockFunctionResponse_1.MockFunctionResponse));
    Mock.FunctionResponse = FunctionResponse;
    ;
    var AfterDeleteRequest = (function (_super) {
        __extends(AfterDeleteRequest, _super);
        function AfterDeleteRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AfterDeleteRequest;
    }(MockTriggerRequest_1.MockAfterDeleteRequest));
    Mock.AfterDeleteRequest = AfterDeleteRequest;
    ;
    var AfterSaveRequest = (function (_super) {
        __extends(AfterSaveRequest, _super);
        function AfterSaveRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AfterSaveRequest;
    }(MockTriggerRequest_1.MockAfterSaveRequest));
    Mock.AfterSaveRequest = AfterSaveRequest;
    ;
    var BeforeDeleteRequest = (function (_super) {
        __extends(BeforeDeleteRequest, _super);
        function BeforeDeleteRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BeforeDeleteRequest;
    }(MockTriggerRequest_1.MockBeforeDeleteRequest));
    Mock.BeforeDeleteRequest = BeforeDeleteRequest;
    ;
    var BeforeSaveRequest = (function (_super) {
        __extends(BeforeSaveRequest, _super);
        function BeforeSaveRequest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BeforeSaveRequest;
    }(MockTriggerRequest_1.MockBeforeSaveRequest));
    Mock.BeforeSaveRequest = BeforeSaveRequest;
    ;
})(Mock = exports.Mock || (exports.Mock = {}));
;
