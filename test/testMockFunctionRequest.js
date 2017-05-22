"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Parse = require("parse/node");
var src_1 = require("../src");
var FunctionRequest = src_1.Mock.FunctionRequest;
describe('Mock.FunctionRequest.constructor()', function () {
    it('should initialize a request with no parameters', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new FunctionRequest();
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.params).to.deep.equal({});
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "installationId" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new FunctionRequest({
                installationId: 'arb'
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.params).to.deep.equal({});
        chai_1.expect(entity.installationId).to.equal('arb');
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "master" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new FunctionRequest({
                master: true
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(true);
        chai_1.expect(entity.params).to.deep.equal({});
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "params" parameter', function () {
        var entity;
        var attemptToInitialize = function () {
            entity = new FunctionRequest({
                params: {
                    foo: 'bar'
                }
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.params).to.deep.equal({ foo: 'bar' });
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.user).to.be.undefined;
    });
    it('should initialize a request with "user" parameter', function () {
        var entity;
        var user = new Parse.User();
        var attemptToInitialize = function () {
            entity = new FunctionRequest({
                user: user
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(false);
        chai_1.expect(entity.params).to.deep.equal({});
        chai_1.expect(entity.installationId).to.be.undefined;
        chai_1.expect(entity.user).to.equal(user);
    });
    it('should initialize a request with all parameters', function () {
        var entity;
        var user = new Parse.User();
        var attemptToInitialize = function () {
            entity = new FunctionRequest({
                installationId: 'arb',
                master: true,
                params: {
                    foo: 'bar'
                },
                user: user
            });
        };
        chai_1.expect(attemptToInitialize).to.not.throw(Error);
        chai_1.expect(entity.master).to.equal(true);
        chai_1.expect(entity.params).to.deep.equal({ foo: 'bar' });
        chai_1.expect(entity.installationId).to.equal('arb');
        chai_1.expect(entity.user).to.equal(user);
    });
});
