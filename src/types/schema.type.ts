import { BaseType } from "./common.type";

export type UserType = BaseType & {
    avatar: string | null;
    username: string;
    displayName: string;
    email: string;
};

export type AttachmentType = BaseType & {
    url: string;
    type: string;
    name: string;
    size: string;
};

export type MetadataType = BaseType & {
    url: string;
    title: string;
    image: string;
};

export type MessageType = BaseType & {
    chatId: string;
    senderId: string;
    message: string | null;
    attachmentId: string | null;
    metadataId: string | null;
};
