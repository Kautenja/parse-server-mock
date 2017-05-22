import {MockFunctionRequest} from './MockFunctionRequest';
import {MockFunctionResponse} from './MockFunctionResponse';
// export the modules in a namespace as extensions with no changes
export namespace Mock {
    export class FunctionRequest extends MockFunctionRequest { };
    export class FunctionResponse extends MockFunctionResponse { };
}
