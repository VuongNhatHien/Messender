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

export interface Error {
    name?: string;
    message?: string;
    stack?: string;
}