export type UserType = {
    userId: number;
    avatar: string;
    name: string;
    email: string;
};

export type ChatType = {
    chatId: number;
    user: UserType;
    messages: {
        sender: UserType;
        message: string;
    }[];
};
