import { MessageResponseType, PreviewMessageType } from "@/types/response.type";
import useSWR from "swr";
import { ResponseType } from "@/types/common.type";
import { AttachmentType, MetadataType, UserType } from "@/types/schema.type";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ErrorCode, SUCCESS } from "@/constant/constant";
import useSWRInfinite from "swr/infinite";

export const useSwrGeneric = <T>(endpoint: string) => {
    const { data, isLoading, error } = useSWR<ResponseType<T | null>>(endpoint);

    if (error) {
        throw new Error(error.message);
    }

    return { data: data?.data, isLoading, code: data?.code };
};

export const useGetUserInChat = (chatId: string) => {
    const router = useRouter();
    const { data, isLoading, code } = useSwrGeneric<UserType>(
        `/chats/${chatId}/users`,
    );
    useEffect(() => {
        if (code && code !== "SUCCESS") {
            if (
                code === ErrorCode.CHAT_NOT_FOUND ||
                code === ErrorCode.NOT_IN_CHAT
            ) {
                router.push("/chats");
            } else {
                throw new Error(code);
            }
        }
    }, [code, router]);

    return { user: data, isLoading };
};

export const useGetMe = () => {
    const { data, isLoading, code } = useSwrGeneric<UserType>("/users/me");
    return { me: data, isLoading, code };
};

export const useSwrInfiniteGeneric = <T>(endpoint: string, limit: number) => {
    const { data, isLoading, size, setSize, error, mutate } = useSWRInfinite<
        ResponseType<(T | null)[]>
    >((index) => `${endpoint}?limit=${limit}&page=${index + 1}`);

    const isLoadingMore =
        isLoading ||
        (size > 0 && data && typeof data[size - 1] === "undefined");
    const isReachingEnd = data && data[data.length - 1]?.data?.length < limit;
    const res = data?.map((page) => page.data).flat();

    if (error) {
        throw new Error(error.message);
    }
    return {
        data: res,
        size,
        isLoading,
        isLoadingMore,
        isReachingEnd,
        setSize,
        code: data?.[size - 1]?.code,
        mutate,
    };
};

export const useGetMessages = (chatId: string) => {
    const router = useRouter();
    const {
        data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    } = useSwrInfiniteGeneric<MessageResponseType>(
        `/chats/${chatId}/messages`,
        20,
    );
    useEffect(() => {
        if (code && code !== SUCCESS) {
            if (
                code === ErrorCode.CHAT_NOT_FOUND ||
                code === ErrorCode.NOT_IN_CHAT
            ) {
                router.push("/chats");
            } else {
                throw new Error(code);
            }
        }
    }, [code, router]);

    return {
        messages: data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    };
};

export const useGetNotConnected = () => {
    const {
        data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    } = useSwrInfiniteGeneric<UserType>(`/users/not-connected`, 20);
    useEffect(() => {
        if (code && code !== SUCCESS) {
            throw new Error(code);
        }
    }, [code]);

    return {
        users: data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    };
};

export const useGetPreviews = () => {
    const {
        data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    } = useSwrInfiniteGeneric<PreviewMessageType>(`/users/chats`, 15);
    useEffect(() => {
        if (code && code !== SUCCESS) {
            throw new Error(code);
        }
    }, [code]);

    return {
        previews: data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    };
};

export const useGetMedia = (chatId: string) => {
    const router = useRouter();
    const {
        data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    } = useSwrInfiniteGeneric<AttachmentType>(
        `/chats/${chatId}/attachments/media`,
        21,
    );
    useEffect(() => {
        if (code && code !== SUCCESS) {
            if (
                code === ErrorCode.CHAT_NOT_FOUND ||
                code === ErrorCode.NOT_IN_CHAT
            ) {
                router.push("/chats");
            } else {
                throw new Error(code);
            }
        }
    }, [code, router]);

    return {
        media: data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    };
};

export const useGetFiles = (chatId: string) => {
    const router = useRouter();
    const {
        data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    } = useSwrInfiniteGeneric<AttachmentType>(
        `/chats/${chatId}/attachments/files`,
        15,
    );
    useEffect(() => {
        if (code && code !== SUCCESS) {
            if (
                code === ErrorCode.CHAT_NOT_FOUND ||
                code === ErrorCode.NOT_IN_CHAT
            ) {
                router.push("/chats");
            } else {
                throw new Error(code);
            }
        }
    }, [code, router]);

    return {
        files: data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    };
};

export const useGetLinks = (chatId: string) => {
    const router = useRouter();
    const {
        data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    } = useSwrInfiniteGeneric<MetadataType>(`/chats/${chatId}/links`, 15);
    useEffect(() => {
        if (code && code !== SUCCESS) {
            if (
                code === ErrorCode.CHAT_NOT_FOUND ||
                code === ErrorCode.NOT_IN_CHAT
            ) {
                router.push("/chats");
            } else {
                throw new Error(code);
            }
        }
    }, [code, router]);

    return {
        links: data,
        isLoading,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
        code,
        mutate,
    };
};
