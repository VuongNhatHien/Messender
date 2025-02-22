export type UserType = {
    id: string;
    avatar: string;
    username: string;
    displayName: string;
    email: string;
};

export type AttachmentType = {
    id: string;
    url: string;
    type: string;
    name: string;
    size: string;
};

export type MetadataType = {
    id: string;
    url: string;
    title: string;
    image: string;
};

export type MessageType = {
    id: string;
    senderId: string;
    message: string | null;
    attachment: AttachmentType | null;
    metadata: MetadataType | null;
};

export type ChatType = {
    id: string;
    user: UserType;
    messages: MessageType[];
};

export type PreviewMessageType = {
    chatId: string;
    user: UserType;
    lastMessage: MessageType | null;
};
