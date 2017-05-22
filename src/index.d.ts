import { MockFunctionRequest } from './MockFunctionRequest';
import { MockAfterDeleteRequest, MockAfterSaveRequest, MockBeforeDeleteRequest, MockBeforeSaveRequest } from './MockTriggerRequest';
import { MockFunctionResponse, MockBeforeSaveResponse, MockBeforeDeleteResponse } from './MockResponse';
export declare namespace Mock {
    class AfterDeleteRequest extends MockAfterDeleteRequest {
    }
    class AfterSaveRequest extends MockAfterSaveRequest {
    }
    class BeforeDeleteRequest extends MockBeforeDeleteRequest {
    }
    class BeforeDeleteResponse extends MockBeforeDeleteResponse {
    }
    class BeforeSaveRequest extends MockBeforeSaveRequest {
    }
    class BeforeSaveResponse extends MockBeforeSaveResponse {
    }
    class FunctionRequest extends MockFunctionRequest {
    }
    class FunctionResponse extends MockFunctionResponse {
    }
}
