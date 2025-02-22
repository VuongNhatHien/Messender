export type BaseType = {
    id: string;
    createdAt: string;
    updatedAt: string;
};

export type ResponseType<T> = {
    data: T;
    status: number;
    code: string;
};
