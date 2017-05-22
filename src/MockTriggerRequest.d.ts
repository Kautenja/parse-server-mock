/// <reference types="parse" />
import * as Parse from 'parse/node';
declare type TriggerRequestProperties = {
    readonly installationId?: string;
    readonly master?: boolean;
    readonly object: Parse.Object;
    readonly user?: Parse.User;
};
declare class MockTriggerRequest implements TriggerRequestProperties {
    readonly installationId: string;
    readonly master: boolean;
    readonly object: Parse.Object;
    readonly user: Parse.User;
    constructor(options: TriggerRequestProperties);
}
declare class MockAfterDeleteRequest extends MockTriggerRequest implements Parse.Cloud.AfterDeleteRequest {
}
declare class MockAfterSaveRequest extends MockTriggerRequest implements Parse.Cloud.AfterSaveRequest {
}
declare class MockBeforeDeleteRequest extends MockTriggerRequest implements Parse.Cloud.BeforeDeleteRequest {
}
declare class MockBeforeSaveRequest extends MockTriggerRequest implements Parse.Cloud.BeforeSaveRequest {
}
export { TriggerRequestProperties, MockTriggerRequest, MockAfterDeleteRequest, MockAfterSaveRequest, MockBeforeDeleteRequest, MockBeforeSaveRequest };
