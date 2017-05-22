import {expect} from 'chai';
import * as Parse from 'parse/node';
import {Mock} from '../src';
// import the specific class for convenience.
import FunctionRequest = Mock.FunctionRequest;

describe('Mock.FunctionRequest.constructor()', () => {

    it('should initialize a request with no parameters', () => {
        var entity: FunctionRequest;
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new FunctionRequest();
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(false);
        expect(entity.params).to.deep.equal({});
        expect(entity.installationId).to.be.undefined;
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a response with "installationId" parameter', () => {
        var entity: FunctionRequest;
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new FunctionRequest({
                installationId: 'arb'
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(false);
        expect(entity.params).to.deep.equal({});
        expect(entity.installationId).to.equal('arb');
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a request with "master" parameter', () => {
        var entity: FunctionRequest;
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new FunctionRequest({
                master: true
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(true);
        expect(entity.params).to.deep.equal({});
        expect(entity.installationId).to.be.undefined;
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a request with "params" parameter', () => {
        var entity: FunctionRequest;
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new FunctionRequest({
                params: {
                    foo: 'bar'
                }
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(false);
        expect(entity.params).to.deep.equal({foo: 'bar'});
        expect(entity.installationId).to.be.undefined;
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a response with "user" parameter', () => {
        var entity: FunctionRequest;
        let user = new Parse.User();
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new FunctionRequest({
                user: user
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(false);
        expect(entity.params).to.deep.equal({});
        expect(entity.installationId).to.be.undefined;
        expect(entity.user).to.equal(user);
    });

    it('should initialize a response with all parameters', () => {
        var entity: FunctionRequest;
        let user = new Parse.User();
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new FunctionRequest({
                installationId: 'arb',
                master: true,
                params: {
                    foo: 'bar'
                },
                user: user
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(true);
        expect(entity.params).to.deep.equal({foo: 'bar'});
        expect(entity.installationId).to.equal('arb');
        expect(entity.user).to.equal(user);
    });

});
