import http from "@/lib/http";
import { ResponseType } from "@/types/common.type";
import { LoginBodyType, RegisterBodyType } from "@/types/request.type";
import {
    AddChatResponseType,
    GetMessageResponseType,
    LoginResponseType,
    MessageResponseType,
    RegisterResponseType,
} from "@/types/response.type";
import { AttachmentType, MetadataType, UserType } from "@/types/schema.type";
import { PreviewMessageType } from "@/types/response.type";

export const requests = {
    register: (body: RegisterBodyType) => {
        return http.post<ResponseType<RegisterResponseType>>(
            "/auth/register",
            body,
        );
    },
    login: (body: LoginBodyType) => {
        return http.post<ResponseType<LoginResponseType>>("/auth/login", body);
    },
    auth: (body: { token: string; expiresIn: string }) => {
        return http.post("/api/auth", body, {
            baseUrl: "http://localhost:3000",
        });
    },
    getPreviews: () => {
        return http.get<ResponseType<PreviewMessageType[]>>("/users/chats");
    },
    logout: () => {
        return http.post(
            "/api/auth/logout",
            {},
            {
                baseUrl: "",
            },
        );
    },
    getMessages: (chatId: string) => {
        return http.get<ResponseType<GetMessageResponseType | null>>(
            `/chats/${chatId}/messages`,
        );
    },
    getUserFromChat: (chatId: string) => {
        return http.get<ResponseType<UserType | null>>(
            `/chats/${chatId}/users`,
            {},
        );
    },
    getMedia: (chatId: string) => {
        return http.get<ResponseType<AttachmentType[]>>(
            `/chats/${chatId}/attachments/media`,
        );
    },
    getFiles: (chatId: string) => {
        return http.get<ResponseType<AttachmentType[]>>(
            `/chats/${chatId}/attachments/files`,
        );
    },
    getLinks: (chatId: string) => {
        return http.get<ResponseType<MetadataType[]>>(`/chats/${chatId}/links`);
    },
    getNotConnected: () => {
        return http.get<ResponseType<UserType[]>>("/users/not-connected");
    },
    addUser: (userId: number) => {
        return http.post<ResponseType<AddChatResponseType | null>>(
            `/users/${userId}/chat-requests`,
            {},
        );
    },
    sendMessage: (chatId: string, message: string) => {
        return http.post<ResponseType<MessageResponseType>>(
            `/chats/${chatId}/messages`,
            { message: message },
        );
    },
    uploadFile: (chatId: string, formData: FormData) => {
        return http.post<ResponseType<MessageResponseType>>(
            `/chats/${chatId}/attachments`,
            formData,
        );
    },
    getMe: () => {
        return http.get<ResponseType<UserType | null>>("/users/me");
    },
};
