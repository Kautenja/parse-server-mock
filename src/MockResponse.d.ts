import * as Parse from 'parse/node';
export declare type ResponseProperties = {
    readonly expectedSuccess?: any;
    readonly expectedError?: string;
    readonly isUsingDeepEquals?: boolean;
};
export declare class MockResponse {
    readonly expectedSuccess: any;
    readonly expectedError: string;
    readonly isUsingDeepEquals: boolean;
    constructor(options?: ResponseProperties);
    success(argument?: any): void;
    error(message?: string): void;
}
export declare class MockFunctionResponse extends MockResponse implements Parse.Cloud.FunctionResponse {
}
export declare class MockBeforeSaveResponse extends MockResponse implements Parse.Cloud.FunctionResponse {
}
export declare class MockBeforeDeleteResponse extends MockResponse implements Parse.Cloud.BeforeDeleteResponse {
    success(): void;
}
