import {expect} from 'chai';
import * as Parse from 'parse/node';
import {Mock} from '../src';
// import the specific class for convenience.
import FunctionResponse = Mock.FunctionResponse;

describe('Mock.FunctionResponse.constructor()', () => {

    it('should initialize a response with no parameters', () => {
        var entity: FunctionResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new FunctionResponse();
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(true);
        expect(entity.expectedError).to.be.undefined;
        expect(entity.expectedSuccess).to.be.undefined;
    });

    it('should initialize a response with "isUsingDeepEquals" parameter', () => {
        var entity: FunctionResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new FunctionResponse({
                isUsingDeepEquals: false
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(false);
        expect(entity.expectedError).to.be.undefined;
        expect(entity.expectedSuccess).to.be.undefined;
    });

    it('should initialize a response with "expectedError" parameter', () => {
        var entity: FunctionResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new FunctionResponse({
                expectedError: 'arb'
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(true);
        expect(entity.expectedError).to.equal('arb');
        expect(entity.expectedSuccess).to.be.undefined;
    });

    it('should initialize a response with "expectedSuccess" parameter', () => {
        var entity: FunctionResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new FunctionResponse({
                expectedSuccess: {
                    foo: 'bar'
                }
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(true);
        expect(entity.expectedError).to.be.undefined;
        expect(entity.expectedSuccess).to.deep.equal({foo: 'bar'});
    });

    it('should raise an error when "expectedSuccess" & "expectedError" are both set', () => {
        var entity: FunctionResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new FunctionResponse({
                expectedError: 'arb',
                expectedSuccess: {
                    foo: 'bar'
                }
            });
        };
        expect(attemptToInitialize).to.throw(Error);
    });

});

describe('(Mock.FunctionResponse).error()', () => {

    it('shouldnt fail by default', () => {
        var entity = new FunctionResponse();
        var tryError = () => {
            entity.error();
        };
        expect(tryError).to.not.throw(Error);
    });

    it('shouldnt fail when expectedError is set and passed in', () => {
        var entity = new FunctionResponse({
            expectedError: 'arb'
        });

        var tryError = () => {
            entity.error('arb');
        };
        expect(tryError).to.not.throw(Error);
    });

    it('should fail when expectedError is set and a different error is passed in', () => {
        var entity = new FunctionResponse({
            expectedError: 'arb'
        });

        var tryError = () => {
            entity.error('not the same');
        };
        expect(tryError).to.throw(Error);
    });

    it('should fail when expectedSuccess is set', () => {
        var entity = new FunctionResponse({
            expectedSuccess: 'arb'
        });

        var tryError = () => {
            entity.error();
        };
        expect(tryError).to.throw(Error);
    });

});

describe('(Mock.FunctionResponse).success()', () => {

    it('shouldnt fail by default', () => {
        var entity = new FunctionResponse();
        var trySuccess = () => {
            entity.success();
        };
        expect(trySuccess).to.not.throw(Error);
    });

    it('shouldnt fail when expectedSuccess is set and passed in', () => {
        var entity = new FunctionResponse({
            expectedSuccess: 'arb'
        });

        var trySuccess = () => {
            entity.success('arb');
        };
        expect(trySuccess).to.not.throw(Error);
    });

    it('should fail when expectedSuccess is set and a different error is passed in', () => {
        var entity = new FunctionResponse({
            expectedSuccess: 'arb'
        });

        var trySuccess = () => {
            entity.success('not the same');
        };
        expect(trySuccess).to.throw(Error);
    });

    it('should fail when expectedError is set', () => {
        var entity = new FunctionResponse({
            expectedError: 'arb'
        });

        var trySuccess = () => {
            entity.success();
        };
        expect(trySuccess).to.throw(Error);
    });

    it('should use deep equals', () => {
        var entity = new FunctionResponse({
            expectedSuccess: {
                foo: 'bar'
            }
        });

        var trySuccess = () => {
            entity.success({
                foo: 'bar'
            });
        };
        expect(trySuccess).to.not.throw(Error);
    });

    it('should not use deep equals', () => {
        var entity = new FunctionResponse({
            isUsingDeepEquals: false,
            expectedSuccess: {
                foo: 'bar'
            }
        });

        var trySuccess = () => {
            entity.success({
                foo: 'bar'
            });
        };
        expect(trySuccess).to.throw(Error);
    });

});
