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

export type messageType = {
    messageId: number;
    sender: UserType;
    message: string;
    attachment: AttachmentType | null;
};

export type ChatType = {
    chatId: number;
    user: UserType;
    messages: messageType[];
};
