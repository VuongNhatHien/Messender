import http from "@/lib/http";
import { ResponseType } from "@/types/common.type";
import { RegisterBodyType } from "@/types/request.type";
import { RegisterResponseType } from "@/types/response.type";

export const request = {
    register: (body: RegisterBodyType) => {
        return http.post<ResponseType<RegisterResponseType>>("/auth/register", body);
    },
};
