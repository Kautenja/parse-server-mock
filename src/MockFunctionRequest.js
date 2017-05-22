"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockFunctionRequest = (function () {
    function MockFunctionRequest(options) {
        if (options === undefined) {
            options = {};
        }
        this.installationId = options.installationId;
        this.master = options.master || false;
        this.params = options.params || {};
        this.user = options.user;
    }
    return MockFunctionRequest;
}());
exports.MockFunctionRequest = MockFunctionRequest;
;
