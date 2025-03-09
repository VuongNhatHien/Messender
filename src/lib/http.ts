type CustomOptions = Omit<RequestInit, "method"> & {
    baseUrl?: string | undefined;
};

export const isClient = () => typeof window !== "undefined";
const request = async <Response>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    options?: CustomOptions,
    body?: FormData | object,
) => {
    const baseHeaders: {
        [key: string]: string;
    } =
        body instanceof FormData
            ? {}
            : {
                  "Content-Type": "application/json",
              };

    if (isClient()) {
        const token = localStorage.getItem("token");
        if (token) {
            baseHeaders.Authorization = `Bearer ${token}`;
        }
    }

    const baseUrl =
        options?.baseUrl === undefined
            ? process.env.LOCAL_BACKEND_URL
            : options.baseUrl;

    const fullUrl = url.startsWith("/")
        ? `${baseUrl}${url}`
        : `${baseUrl}/${url}`;


    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers,
        },
        body: body instanceof FormData ? body : JSON.stringify(body),
        method,
    });

    const result: Response = await res.json();
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
        body: FormData | object,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("POST", url, options, body);
    },
    put<Response>(
        url: string,
        body: FormData | object,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("PUT", url, options, body);
    },
    delete<Response>(
        url: string,
        options?: Omit<CustomOptions, "body"> | undefined,
    ) {
        return request<Response>("DELETE", url, options);
    },
};

export default http;
