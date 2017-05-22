"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Parse = require("parse/node");
var MockTriggerRequest_1 = require("../src/MockTriggerRequest");
describe('Mock.MockTriggerRequest.constructor()', function () {
    var pfArb = new Parse.Object();
    it('should raise an error for an undefined options block', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest(undefined);
        };
        chai_1.expect(attemptToInitialize).to.throw(TypeError);
    });
    it('should raise an error for an undefined object', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest({
                object: undefined
            });
        };
        chai_1.expect(attemptToInitialize).to.throw(TypeError);
    });
    it('should not raise an error for an arbitrary object', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest({
                object: pfArb
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(TypeError);
        chai_1.expect(entity.object).to.deep.equal(pfArb);
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "installationId" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest({
                object: pfArb,
                installationId: 'arb'
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.object).to.deep.equal(pfArb);
        chai_1.expect(entity.installationId).to.equal('arb');
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "master" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest({
                object: pfArb,
                master: true
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(TypeError);
        chai_1.expect(entity.object).to.deep.equal(pfArb);
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.master).to.equal(true);
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "user" parameter', function () {
        var entity;
        var user = new Parse.User();
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest({
                object: pfArb,
                user: user
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(TypeError);
        chai_1.expect(entity.object).to.deep.equal(pfArb);
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.user).to.equal(user);
    });
    it('should initialize a request with all parameters', function () {
        var entity;
        var user = new Parse.User();
        var attemptToInitialize = function () {
            entity = new MockTriggerRequest_1.MockTriggerRequest({
                installationId: 'arb',
                master: true,
                object: pfArb,
                user: user
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(true);
        chai_1.expect(entity.object).to.deep.equal(pfArb);
        chai_1.expect(entity.installationId).to.equal('arb');
        chai_1.expect(entity.user).to.equal(user);
    });
});
