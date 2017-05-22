import * as Parse from 'parse/node';
import {expect} from 'chai';


// the interface that defines the properties in MockResponse objects
export type ResponseProperties = {
    // the success message
    readonly expectedSuccess?: any;
    // the expected error message
    readonly expectedError?: string;
    // whether to use deep equals or not
    readonly isUsingDeepEquals?: boolean;
}

/**
 * A class for mocking parse cloud function responses.
 * @type {Parse.Cloud.MockResponse}
 */
export class MockResponse {

    readonly expectedSuccess: any;
    readonly expectedError: string;
    readonly isUsingDeepEquals: boolean = true;

    /**
     * Create a new mock function response
     * @param  {ResponseProperties} options the options for the response
     */
    constructor(options?: ResponseProperties) {
        // if the options are udndefined set it to an empty object
        if (options === undefined) { options = {}; }
        // if there are both expected success and error raise an error
        if (options.expectedSuccess !== undefined && options.expectedError !== undefined) {
            throw Error('cant expect a call to both success and error');
        }
        // assign the local instance variable from the options with defaults
        if (options.isUsingDeepEquals !== undefined) {
            this.isUsingDeepEquals = options.isUsingDeepEquals;
        }
        this.expectedSuccess = options.expectedSuccess;
        this.expectedError = options.expectedError;
    }

    /**
     * Compare the input parameter to the expected inputs for success
     * @param  {any}    argument the argument passed to the response from the
     *                           cloud function
     */
    success(argument?: any) {
        // guard that an error isn't expected
        if (this.expectedError !== undefined) {
            expect.fail('called success when expecting an error');
        }
        // check for deep equals
        else if (this.isUsingDeepEquals) {
            expect(argument).to.deep.equal(this.expectedSuccess);
        }
        // default expectation
        else {
            expect(argument).to.equal(this.expectedSuccess);
        }
    }

    /**
     * Compare the input parameter to the expected inputs for errors
     * @param  {string} message the message passed to the response from the
     *                          cloud function
     */
    error(message?: string) {
        // guard that a success isn't expected
        if (this.expectedSuccess !== undefined) {
            expect.fail('called error when expecting a success');
        }
        // compare the passed in value to the expected one
        else {
            expect(message).to.equal(this.expectedError);
        }
    }
};

// the response for a cloud function call
export class MockFunctionResponse
extends MockResponse
implements Parse.Cloud.FunctionResponse {

};

// the trigger before an object is saved
export class MockBeforeSaveResponse
extends MockResponse
implements Parse.Cloud.FunctionResponse {

};

// the trigger before an object is deleted
export class MockBeforeDeleteResponse
extends MockResponse
implements Parse.Cloud.BeforeDeleteResponse {

    /**
     * Mark the object as approved for deletion. No parameters
     */
    success() {
        // guard that an error isn't expected
        if (this.expectedError !== undefined) {
            expect.fail('called success when expecting an error');
        }
    }

};
