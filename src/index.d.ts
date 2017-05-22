import { MockFunctionRequest } from './MockFunctionRequest';
import { MockFunctionResponse } from './MockFunctionResponse';
import { MockAfterDeleteRequest, MockAfterSaveRequest, MockBeforeDeleteRequest, MockBeforeSaveRequest } from './MockTriggerRequest';
export declare namespace Mock {
    class FunctionRequest extends MockFunctionRequest {
    }
    class FunctionResponse extends MockFunctionResponse {
    }
    class AfterDeleteRequest extends MockAfterDeleteRequest {
    }
    class AfterSaveRequest extends MockAfterSaveRequest {
    }
    class BeforeDeleteRequest extends MockBeforeDeleteRequest {
    }
    class BeforeSaveRequest extends MockBeforeSaveRequest {
    }
}
