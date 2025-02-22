import http from "@/lib/http";
import { ResponseType } from "@/types/common.type";
import { LoginBodyType, RegisterBodyType } from "@/types/request.type";
import { LoginResponseType, RegisterResponseType } from "@/types/response.type";
import { PreviewMessageType } from "@/types/schema.type";

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
};
