import http from "@/lib/http";
import { ResponseType } from "@/types/common.type";
import { LoginBodyType, RegisterBodyType } from "@/types/request.type";
import { AddUserResponseType, GetMessagesResponseType, LoginResponseType, RegisterResponseType } from "@/types/response.type";
import {
    AttachmentType,
    MessageType,
    MetadataType,
    UserType,
} from "@/types/schema.type";
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
    auth: (body: { token: string; expiresIn: string }) =>
        http.post("/api/auth", body, {
            baseUrl: "http://localhost:3000",
        }),
    getPreviews: (token: string) => {
        return http.get<ResponseType<PreviewMessageType[]>>("/users/chats", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
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
    getChat: (chatId: string, token: string) => {
        return http.get<ResponseType<GetMessagesResponseType>>(
            `/chats/${chatId}/messages`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
    getUserFromChat: (chatId: string, token: string) => {
        return http.get<ResponseType<UserType>>(`/chats/${chatId}/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
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
    getNotConnected: (token: string) => {
        return http.get<ResponseType<UserType[]>>("/users/not-connected", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    addUser: (userId: string, token: string) => {
        return http.post<AddUserResponseType>(`/users/${userId}/chat-requests`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};
