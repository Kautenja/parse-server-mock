import {MockFunctionRequest} from './MockFunctionRequest';
import {MockFunctionResponse} from './MockFunctionResponse';
import {
    MockAfterDeleteRequest,
    MockAfterSaveRequest,
    MockBeforeDeleteRequest,
    MockBeforeSaveRequest
} from './MockTriggerRequest';

// export the modules in a namespace as extensions with no changes
export namespace Mock {
    export class FunctionRequest extends MockFunctionRequest { };
    export class FunctionResponse extends MockFunctionResponse { };
    export class AfterDeleteRequest extends MockAfterDeleteRequest { };
    export class AfterSaveRequest extends MockAfterSaveRequest { };
    export class BeforeDeleteRequest extends MockBeforeDeleteRequest { };
    export class BeforeSaveRequest extends MockBeforeSaveRequest { };
};
