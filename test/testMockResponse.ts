import {expect} from 'chai';
import * as Parse from 'parse/node';
import {MockResponse} from '../src/MockResponse';

describe('Mock.MockResponse.constructor()', () => {

    it('should initialize a response with no parameters', () => {
        var entity: MockResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new MockResponse();
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(true);
        expect(entity.expectedError).to.be.undefined;
        expect(entity.expectedSuccess).to.be.undefined;
    });

    it('should initialize a response with "isUsingDeepEquals" parameter', () => {
        var entity: MockResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new MockResponse({
                isUsingDeepEquals: false
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(false);
        expect(entity.expectedError).to.be.undefined;
        expect(entity.expectedSuccess).to.be.undefined;
    });

    it('should initialize a response with "expectedError" parameter', () => {
        var entity: MockResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new MockResponse({
                expectedError: 'arb'
            });
        };
        expect(attemptToInitialize).to.not.throw(Error);
        expect(entity.isUsingDeepEquals).to.equal(true);
        expect(entity.expectedError).to.equal('arb');
        expect(entity.expectedSuccess).to.be.undefined;
    });

    it('should initialize a response with "expectedSuccess" parameter', () => {
        var entity: MockResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new MockResponse({
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
        var entity: MockResponse;
        // the function that will attempt to instantiate the response
        var attemptToInitialize = () => {
            entity = new MockResponse({
                expectedError: 'arb',
                expectedSuccess: {
                    foo: 'bar'
                }
            });
        };
        expect(attemptToInitialize).to.throw(Error);
    });

});

describe('(Mock.MockResponse).error()', () => {

    it('shouldnt fail by default', () => {
        var entity = new MockResponse();
        var tryError = () => {
            entity.error();
        };
        expect(tryError).to.not.throw(Error);
    });

    it('shouldnt fail when expectedError is set and passed in', () => {
        var entity = new MockResponse({
            expectedError: 'arb'
        });

        var tryError = () => {
            entity.error('arb');
        };
        expect(tryError).to.not.throw(Error);
    });

    it('should fail when expectedError is set and a different error is passed in', () => {
        var entity = new MockResponse({
            expectedError: 'arb'
        });

        var tryError = () => {
            entity.error('not the same');
        };
        expect(tryError).to.throw(Error);
    });

    it('should fail when expectedSuccess is set', () => {
        var entity = new MockResponse({
            expectedSuccess: 'arb'
        });

        var tryError = () => {
            entity.error();
        };
        expect(tryError).to.throw(Error);
    });

});

describe('(Mock.MockResponse).success()', () => {

    it('shouldnt fail by default', () => {
        var entity = new MockResponse();
        var trySuccess = () => {
            entity.success();
        };
        expect(trySuccess).to.not.throw(Error);
    });

    it('shouldnt fail when expectedSuccess is set and passed in', () => {
        var entity = new MockResponse({
            expectedSuccess: 'arb'
        });

        var trySuccess = () => {
            entity.success('arb');
        };
        expect(trySuccess).to.not.throw(Error);
    });

    it('should fail when expectedSuccess is set and a different error is passed in', () => {
        var entity = new MockResponse({
            expectedSuccess: 'arb'
        });

        var trySuccess = () => {
            entity.success('not the same');
        };
        expect(trySuccess).to.throw(Error);
    });

    it('should fail when expectedError is set', () => {
        var entity = new MockResponse({
            expectedError: 'arb'
        });

        var trySuccess = () => {
            entity.success();
        };
        expect(trySuccess).to.throw(Error);
    });

    it('should use deep equals', () => {
        var entity = new MockResponse({
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
        var entity = new MockResponse({
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
