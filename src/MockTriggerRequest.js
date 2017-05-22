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
var MockTriggerRequest = (function () {
    function MockTriggerRequest(options) {
        if (options === undefined) {
            throw new TypeError('save request must have an options block');
        }
        this.object = options.object;
        if (this.object === undefined) {
            throw new TypeError('options block must have a field called "object"');
        }
        this.installationId = options.installationId;
        this.master = options.master || false;
        this.user = options.user;
    }
    return MockTriggerRequest;
}());
exports.MockTriggerRequest = MockTriggerRequest;
;
var MockAfterDeleteRequest = (function (_super) {
    __extends(MockAfterDeleteRequest, _super);
    function MockAfterDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockAfterDeleteRequest;
}(MockTriggerRequest));
exports.MockAfterDeleteRequest = MockAfterDeleteRequest;
;
var MockAfterSaveRequest = (function (_super) {
    __extends(MockAfterSaveRequest, _super);
    function MockAfterSaveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockAfterSaveRequest;
}(MockTriggerRequest));
exports.MockAfterSaveRequest = MockAfterSaveRequest;
;
var MockBeforeDeleteRequest = (function (_super) {
    __extends(MockBeforeDeleteRequest, _super);
    function MockBeforeDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockBeforeDeleteRequest;
}(MockTriggerRequest));
exports.MockBeforeDeleteRequest = MockBeforeDeleteRequest;
;
var MockBeforeSaveRequest = (function (_super) {
    __extends(MockBeforeSaveRequest, _super);
    function MockBeforeSaveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockBeforeSaveRequest;
}(MockTriggerRequest));
exports.MockBeforeSaveRequest = MockBeforeSaveRequest;
;
