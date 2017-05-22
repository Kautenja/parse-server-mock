import * as Parse from 'parse/node';
export declare type FunctionResponseProperties = {
    readonly expectedSuccess?: any;
    readonly expectedError?: string;
    readonly isUsingDeepEquals?: boolean;
};
export declare class MockFunctionResponse implements Parse.Cloud.FunctionResponse {
    readonly expectedSuccess: any;
    readonly expectedError: string;
    readonly isUsingDeepEquals: boolean;
    constructor(options?: FunctionResponseProperties);
    success(argument?: any): void;
    error(message?: string): void;
}
