import http from "@/lib/http";
import { ResponseType } from "@/types/common.type";
import { LoginBodyType, RegisterBodyType } from "@/types/request.type";
import {
    AddChatResponseType,
    LoginResponseType,
    MessageResponseType,
    RegisterResponseType,
} from "@/types/response.type";

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
            // baseUrl: `${envConfig.NEXT_PUBLIC_BACKEND_URL}:3000`,
            baseUrl: `${process.env.NEXT_PUBLIC_FRONTEND_SERVER_URL}`,
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
    // getMe: () => {
    //     return http.get<ResponseType<UserType | null>>("/users/me");
    // },
};
