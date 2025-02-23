import { BaseType } from "./common.type";
import { RegisterBodyType } from "./request.type";
import {
    UserType,
    MessageType,
    AttachmentType,
    MetadataType,
} from "./schema.type";
import { ResponseType } from "@/types/common.type";

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
    id: number;
    user: UserType;
    messages: GetMessagesResponseType;
};
export type PreviewMessageType = {
    chatId: number;
    user: UserType;
    lastMessage: MessageType | null;
};

export type AddUserResponseType = ResponseType<
    BaseType & {
        user1Id: number;
        user2Id: number;
    }
>;
