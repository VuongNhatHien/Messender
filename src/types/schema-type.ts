export type UserType = {
    userId: number;
    avatar: string;
    name: string;
    email: string;
};

export type AttachmentType = {
    attachmentId: number;
    fileUrl: string;
    fileType: string;
    fileName: string;
    fileSize: number;
};

export type MetadataType = {
    metadataId: number,
    url: string,
    title: string,
    image: string,
}

export type messageType = {
    messageId: number;
    sender: UserType;
    message: string;
    attachment: AttachmentType | null;
    metadata: MetadataType | null;
};

export type ChatType = {
    chatId: number;
    user: UserType;
    messages: messageType[];
};

export type PreviewMessageType = {
    chatId: number;
    user: UserType;
    lastMessage: string;
}