import {MockFunctionRequest} from './MockFunctionRequest';
import {
    MockAfterDeleteRequest,
    MockAfterSaveRequest,
    MockBeforeDeleteRequest,
    MockBeforeSaveRequest
} from './MockTriggerRequest';
import {
    MockFunctionResponse,
    MockBeforeSaveResponse,
    MockBeforeDeleteResponse
} from './MockResponse';

// export the modules in a namespace as extensions with no changes
export namespace Mock {
    export class AfterDeleteRequest extends MockAfterDeleteRequest { };
    export class AfterSaveRequest extends MockAfterSaveRequest { };
    export class BeforeDeleteRequest extends MockBeforeDeleteRequest { };
    export class BeforeDeleteResponse extends MockBeforeDeleteResponse { };
    export class BeforeSaveRequest extends MockBeforeSaveRequest { };
    export class BeforeSaveResponse extends MockBeforeSaveResponse { };
    export class FunctionRequest extends MockFunctionRequest { };
    export class FunctionResponse extends MockFunctionResponse { };
};
