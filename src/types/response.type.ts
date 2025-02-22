import { BaseType } from "./common.type";
import { RegisterBodyType } from "./request.type";
import {
    UserType,
    MessageType,
    AttachmentType,
    MetadataType,
} from "./schema.type";

export type RegisterResponseType = BaseType & RegisterBodyType;
export type RegisterResponseValidationErrorType = {
    username?: string;
    displayName?: string;
    password?: string;
};

export type LoginResponseType = {
    token: string;
    expiresIn: string;
};
export type LoginResponseValidationErrorType = {
    username?: string;
    password?: string;
};

export type GetMessagesResponseType = (MessageType & {
    attachment: AttachmentType | null;
    metadata: MetadataType | null;
})[];

export type ChatType = {
    id: string;
    user: UserType;
    messages: GetMessagesResponseType;
};
export type PreviewMessageType = {
    chatId: string;
    user: UserType;
    lastMessage: MessageType | null;
};
