import * as Parse from 'parse/node';


// the type that defines the properties in MockSaveRequest objects
type TriggerRequestProperties = {
    // the installation id of the user making the request
    readonly installationId?: string;
    // determines if the master key was used in the operation
    readonly master?: boolean;
    // the object for the request (not optional)
    readonly object: Parse.Object;
    // the user calling the function
    readonly user?: Parse.User;
}

/**
 * A class for mocking parse cloud save trigger requests.
 * @type {MockTriggerRequest}
 */
class MockTriggerRequest implements TriggerRequestProperties {

    readonly installationId: string;
    readonly master: boolean;
    readonly object: Parse.Object;
    readonly user: Parse.User;

    /**
     * Create a new mock save request
     * @param  {TriggerRequestProperties} options the options for the request
     */
    constructor(options: TriggerRequestProperties) {
        // if the options are undefined set it to an empty object
        if (options === undefined) {
            throw new TypeError('save request must have an options block');
        }
        // assign the local instance variable from the options with defaults
        this.object = options.object;
        if (this.object === undefined) {
            throw new TypeError('options block must have a field called "object"');
        }
        this.installationId = options.installationId;
        this.master = options.master || false;
        this.user = options.user;
    }

};

// the trigger for after a parse object deletess
class MockAfterDeleteRequest
extends MockTriggerRequest
implements Parse.Cloud.AfterDeleteRequest {

};

// the trigger for after a parse object saves
class MockAfterSaveRequest extends MockTriggerRequest
implements Parse.Cloud.AfterSaveRequest {

};

// the trigger for before a parse object is deleted
class MockBeforeDeleteRequest
extends MockTriggerRequest
implements Parse.Cloud.BeforeDeleteRequest {

};

// the trigger for before a parse object saves
class MockBeforeSaveRequest
extends MockTriggerRequest
implements Parse.Cloud.BeforeSaveRequest {

};

// export all the types and classes
export {
    TriggerRequestProperties,
    MockTriggerRequest,
    MockAfterDeleteRequest,
    MockAfterSaveRequest,
    MockBeforeDeleteRequest,
    MockBeforeSaveRequest
};
