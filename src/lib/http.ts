import envConfig from "@/config";
import { getServerToken } from "./server-utils";

type CustomOptions = Omit<RequestInit, "method"> & {
    baseUrl?: string | undefined;
};

export const isClient = () => typeof window !== "undefined";
const request = async <Response>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    options?: CustomOptions | undefined,
) => {
    let body: FormData | string | undefined = undefined;
    if (options?.body instanceof FormData) {
        body = options.body;
    } else if (options?.body) {
        body = JSON.stringify(options.body);
    }
    const baseHeaders: {
        [key: string]: string;
    } =
        body instanceof FormData
            ? {}
            : {
                  "Content-Type": "application/json",
              };

    if (isClient()) {
        const sessionToken = localStorage.getItem("token");
        if (sessionToken) {
            baseHeaders.Authorization = `Bearer ${sessionToken}`;
        }
    }

    const baseUrl =
        options?.baseUrl === undefined
            ? envConfig.NEXT_PUBLIC_API_ENDPOINT
            : options.baseUrl;

    const fullUrl = url.startsWith("/")
        ? `${baseUrl}${url}`
        : `${baseUrl}/${url}`;

    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers,
        } as any,
        body,
        method,
    });

    const result : Response = await res.json();
    return result;
};

const http = {
    get<Response>(
        url: string,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("GET", url, options);
    },
    post<Response>(
        url: string,
        body: any,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("POST", url, { ...options, body });
    },
    put<Response>(
        url: string,
        body: any,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("PUT", url, { ...options, body });
    },
    delete<Response>(
        url: string,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("DELETE", url, { ...options });
    },
};

export default http;
