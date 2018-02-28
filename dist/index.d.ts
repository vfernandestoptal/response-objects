declare function R_(code: number, body?: any, headers?: any): ResponseObject;
export default R_;
export interface R<Body> extends ResponseObject {
    body: Body;
}
export interface BaseResponseObject {
    body?: any;
    status: number;
    headers?: object;
}
export interface ResponseObject extends BaseResponseObject {
    statusCode: number;
    toJSON(): BaseResponseObject;
    toString(): string;
}
export interface ErrorResponseObject extends ResponseObject, Error {
}
export declare type BodyCreator = (code: number, body?: any, headers?: object) => any;
declare const _setBodyCreator: (fn: BodyCreator) => void;
declare const _MARKER: symbol;
export { _MARKER as MARKER, _setBodyCreator as setBodyCreator };
export declare type RConstructor = (body?: any, headers?: object) => ResponseObject;
export declare type RErrorConstructor = (body?: any, headers?: object) => ErrorResponseObject;
export declare const Continue: RConstructor;
export declare const SwitchingProtocols: RConstructor;
export declare const Processing: RConstructor;
export declare const OK: RConstructor;
export declare const Ok: RConstructor;
export declare const Created: RConstructor;
export declare const Accepted: RConstructor;
export declare const NonAuthoritativeInformation: RConstructor;
export declare const NoContent: RConstructor;
export declare const ResetContent: RConstructor;
export declare const PartialContent: RConstructor;
export declare const MultiStatus: RConstructor;
export declare const AlreadyReported: RConstructor;
export declare const IMUsed: RConstructor;
export declare const MultipleChoices: RConstructor;
export declare const MovedPermanently: RConstructor;
export declare const Found: RConstructor;
export declare const SeeOther: RConstructor;
export declare const NotModified: RConstructor;
export declare const UseProxy: RConstructor;
export declare const TemporaryRedirect: RConstructor;
export declare const PermanentRedirect: RConstructor;
export declare const BadRequest: RErrorConstructor;
export declare const Unauthorized: RErrorConstructor;
export declare const PaymentRequired: RErrorConstructor;
export declare const Forbidden: RErrorConstructor;
export declare const NotFound: RErrorConstructor;
export declare const MethodNotAllowed: RErrorConstructor;
export declare const NotAcceptable: RErrorConstructor;
export declare const ProxyAuthenticationRequired: RErrorConstructor;
export declare const RequestTimeout: RErrorConstructor;
export declare const Conflict: RErrorConstructor;
export declare const Gone: RErrorConstructor;
export declare const LengthRequired: RErrorConstructor;
export declare const PreconditionFailed: RErrorConstructor;
export declare const PayloadTooLarge: RErrorConstructor;
export declare const URITooLong: RErrorConstructor;
export declare const UnsupportedMediaType: RErrorConstructor;
export declare const RangeNotSatisfiable: RErrorConstructor;
export declare const ExpectationFailed: RErrorConstructor;
export declare const MisdirectedRequest: RErrorConstructor;
export declare const UnprocessableEntity: RErrorConstructor;
export declare const Locked: RErrorConstructor;
export declare const FailedDependency: RErrorConstructor;
export declare const UnorderedCollection: RErrorConstructor;
export declare const UpgradeRequired: RErrorConstructor;
export declare const PreconditionRequired: RErrorConstructor;
export declare const TooManyRequests: RErrorConstructor;
export declare const RequestHeaderFieldsTooLarge: RErrorConstructor;
export declare const UnavailableForLegalReasons: RErrorConstructor;
export declare const InternalServerError: RErrorConstructor;
export declare const NotImplemented: RErrorConstructor;
export declare const BadGateway: RErrorConstructor;
export declare const ServiceUnavailable: RErrorConstructor;
export declare const GatewayTimeout: RErrorConstructor;
export declare const HTTPVersionNotSupported: RErrorConstructor;
export declare const VariantAlsoNegotiates: RErrorConstructor;
export declare const InsufficientStorage: RErrorConstructor;
export declare const LoopDetected: RErrorConstructor;
export declare const BandwidthLimitExceeded: RErrorConstructor;
export declare const NotExtended: RErrorConstructor;
export declare const NetworkAuthenticationRequired: RErrorConstructor;
declare namespace R_ {
    const Continue: RConstructor;
    const SwitchingProtocols: RConstructor;
    const Processing: RConstructor;
    const OK: RConstructor;
    const Ok: RConstructor;
    const Created: RConstructor;
    const Accepted: RConstructor;
    const NonAuthoritativeInformation: RConstructor;
    const NoContent: RConstructor;
    const ResetContent: RConstructor;
    const PartialContent: RConstructor;
    const MultiStatus: RConstructor;
    const AlreadyReported: RConstructor;
    const IMUsed: RConstructor;
    const MultipleChoices: RConstructor;
    const MovedPermanently: RConstructor;
    const Found: RConstructor;
    const SeeOther: RConstructor;
    const NotModified: RConstructor;
    const UseProxy: RConstructor;
    const TemporaryRedirect: RConstructor;
    const PermanentRedirect: RConstructor;
    const BadRequest: RErrorConstructor;
    const Unauthorized: RErrorConstructor;
    const PaymentRequired: RErrorConstructor;
    const Forbidden: RErrorConstructor;
    const NotFound: RErrorConstructor;
    const MethodNotAllowed: RErrorConstructor;
    const NotAcceptable: RErrorConstructor;
    const ProxyAuthenticationRequired: RErrorConstructor;
    const RequestTimeout: RErrorConstructor;
    const Conflict: RErrorConstructor;
    const Gone: RErrorConstructor;
    const LengthRequired: RErrorConstructor;
    const PreconditionFailed: RErrorConstructor;
    const PayloadTooLarge: RErrorConstructor;
    const URITooLong: RErrorConstructor;
    const UnsupportedMediaType: RErrorConstructor;
    const RangeNotSatisfiable: RErrorConstructor;
    const ExpectationFailed: RErrorConstructor;
    const MisdirectedRequest: RErrorConstructor;
    const UnprocessableEntity: RErrorConstructor;
    const Locked: RErrorConstructor;
    const FailedDependency: RErrorConstructor;
    const UnorderedCollection: RErrorConstructor;
    const UpgradeRequired: RErrorConstructor;
    const PreconditionRequired: RErrorConstructor;
    const TooManyRequests: RErrorConstructor;
    const RequestHeaderFieldsTooLarge: RErrorConstructor;
    const UnavailableForLegalReasons: RErrorConstructor;
    const InternalServerError: RErrorConstructor;
    const NotImplemented: RErrorConstructor;
    const BadGateway: RErrorConstructor;
    const ServiceUnavailable: RErrorConstructor;
    const GatewayTimeout: RErrorConstructor;
    const HTTPVersionNotSupported: RErrorConstructor;
    const VariantAlsoNegotiates: RErrorConstructor;
    const InsufficientStorage: RErrorConstructor;
    const LoopDetected: RErrorConstructor;
    const BandwidthLimitExceeded: RErrorConstructor;
    const NotExtended: RErrorConstructor;
    const NetworkAuthenticationRequired: RErrorConstructor;
    const setBodyCreator: (fn: BodyCreator) => void;
    const MARKER: symbol;
}
