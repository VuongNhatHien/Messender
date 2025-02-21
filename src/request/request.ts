import http from "@/lib/http";
import { ResponseType } from "@/types/common.type";
import { LoginBodyType, RegisterBodyType } from "@/types/request.type";
import { LoginResponseType, RegisterResponseType } from "@/types/response.type";

export const request = {
    register: (body: RegisterBodyType) => {
        return http.post<ResponseType<RegisterResponseType>>("/auth/register", body);
    },
    login: (body: LoginBodyType) => {
        return http.post<ResponseType<LoginResponseType>>("/auth/login", body);
    }
};
