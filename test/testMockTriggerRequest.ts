import {expect} from 'chai';
import * as Parse from 'parse/node';
import {MockTriggerRequest} from '../src/MockTriggerRequest';

describe('Mock.MockTriggerRequest.constructor()', () => {

    let pfArb = new Parse.Object();

    it('should raise an error for an undefined options block', () => {
        var entity: MockTriggerRequest;
        // the function that will attempt to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest(undefined);
        };
        expect(attemptToInitialize).to.throw(TypeError);
    });

    it('should raise an error for an undefined object', () => {
        var entity: MockTriggerRequest;
        // the function that will attempt to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest({
                object: undefined
            });
        };
        expect(attemptToInitialize).to.throw(TypeError);
    });

    it('should not raise an error for an arbitrary object', () => {
        var entity: MockTriggerRequest;
        // the function that will attempt to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest({
                object: pfArb
            });
        };
        expect(attemptToInitialize).to.not.throw(TypeError);
        expect(entity.object).to.deep.equal(pfArb);
        expect(entity.installationId).to.be.undefined;
        expect(entity.master).to.equal(false);
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a request with "installationId" parameter', () => {
        var entity: MockTriggerRequest;
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest({
                object: pfArb,
                installationId: 'arb'
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.object).to.deep.equal(pfArb);
        expect(entity.installationId).to.equal('arb');
        expect(entity.master).to.equal(false);
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a request with "master" parameter', () => {
        var entity: MockTriggerRequest;
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest({
                object: pfArb,
                master: true
            });
        };
        expect(attemptToInitialize).to.not.throw(TypeError);
        expect(entity.object).to.deep.equal(pfArb);
        expect(entity.installationId).to.be.undefined;
        expect(entity.master).to.equal(true);
        expect(entity.user).to.be.undefined;
    });

    it('should initialize a request with "user" parameter', () => {
        var entity: MockTriggerRequest;
        let user = new Parse.User();
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest({
                object: pfArb,
                user: user
            });
        };
        expect(attemptToInitialize).to.not.throw(TypeError);
        expect(entity.object).to.deep.equal(pfArb);
        expect(entity.installationId).to.be.undefined;
        expect(entity.master).to.equal(false);
        expect(entity.user).to.equal(user);
    });

    it('should initialize a request with all parameters', () => {
        var entity: MockTriggerRequest;
        let user = new Parse.User();
        // the function that will attemp to instantiate the request
        var attemptToInitialize = () => {
            entity = new MockTriggerRequest({
                installationId: 'arb',
                master: true,
                object: pfArb,
                user: user
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.master).to.equal(true);
        expect(entity.object).to.deep.equal(pfArb);
        expect(entity.installationId).to.equal('arb');
        expect(entity.user).to.equal(user);
    });

});
