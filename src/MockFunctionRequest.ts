import * as Parse from 'parse/node';
import {expect} from 'chai';


// the type that defines the properties in FunctionRequest objects
export type FunctionRequestProperties = {
    // the installation id of the user making the request
    readonly installationId?: string;
    // determines if the master key was used in the operation
    readonly master?: boolean;
    // the object containing the parameters passed to the function
    readonly params?: object;
    // the user calling the function
    readonly user?: Parse.User;
}

/**
 * A class for mocking parse cloud function requests.
 * @type {Parse.Cloud.FunctionRequest}
 */
export class MockFunctionRequest implements Parse.Cloud.FunctionRequest {

    readonly installationId: string;
    readonly master: boolean;
    readonly params: object;
    readonly user: Parse.User;

    /**
     * Create a new mock function request
     * @param  {FunctionRequestProperties} options the options for the request
     */
    constructor(options?: FunctionRequestProperties) {
        // if the options are udndefined set it to an empty object
        if (options === undefined) { options = {}; }
        // assign the local instance variable from the options with defaults
        this.installationId = options.installationId;
        this.master = options.master || false;
        this.params = options.params || {};
        this.user = options.user;
    }

};
