export type UserType = {
    id: number;
    avatar: string;
    username: string;
    displayName: string;
    email: string;
};

export type AttachmentType = {
    id: number;
    fileUrl: string;
    fileType: string;
    fileName: string;
    fileSize: number;
};

export type MetadataType = {
    id: number;
    url: string;
    title: string;
    image: string;
};

export type MessageType = {
    id: number;
    sender: UserType;
    message: string | null;
    attachment: AttachmentType | null;
    metadata: MetadataType | null;
};

export type ChatType = {
    id: number;
    user: UserType;
    messages: MessageType[];
};

export type PreviewMessageType = {
    chatId: number;
    user: UserType;
    lastMessage: MessageType | null;
};
