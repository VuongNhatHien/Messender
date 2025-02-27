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

    logout: () => {
        return http.post(
            "/api/auth/logout",
            {},
            {
                baseUrl: "",
            },
        );
    },

    addUser: (userId: number, token: string) => {
        return http.post<ResponseType<AddChatResponseType | null>>(
            `/users/${userId}/chat-requests`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
    sendMessage: (chatId: string, message: string, token: string) => {
        return http.post<ResponseType<MessageResponseType>>(
            `/chats/${chatId}/messages`,
            { message: message },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
    uploadFile: (chatId: string, formData: FormData, token: string) => {
        return http.post<ResponseType<MessageResponseType>>(
            `/chats/${chatId}/attachments`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
    getMe: () => {
        return http.get<ResponseType<UserType | null>>("/users/me");
    },
};
