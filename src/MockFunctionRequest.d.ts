/// <reference types="parse" />
import * as Parse from 'parse/node';
export declare type FunctionRequestProperties = {
    readonly installationId?: string;
    readonly master?: boolean;
    readonly params?: object;
    readonly user?: Parse.User;
};
export declare class MockFunctionRequest implements Parse.Cloud.FunctionRequest {
    readonly installationId: string;
    readonly master: boolean;
    readonly params: object;
    readonly user: Parse.User;
    constructor(options?: FunctionRequestProperties);
}
