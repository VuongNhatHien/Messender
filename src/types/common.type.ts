export type BaseType = {
    id: number;
    createdAt: string;
    updatedAt: string;
};

export type ResponseType<T> = {
    data: T;
    status: number;
    code: string;
};
