import { BaseResponseType } from "./common.type";
import { RegisterBodyType } from "./request.type";

export type RegisterResponseType = BaseResponseType & RegisterBodyType;
export type RegisterResponseValidationErrorType = {
    username?: string;
    displayName?: string;
    password?: string;
}

export type LoginResponseType = {
    token: string;
    expiresIn: string;
}
export type LoginResponseValidationErrorType = {
    username?: string;
    password?: string;
}