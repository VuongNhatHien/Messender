import { MessageResponseType, PreviewMessageType } from "@/types/response.type";
import useSWR from "swr";
import { ResponseType } from "@/types/common.type";
import { AttachmentType, MetadataType, UserType } from "@/types/schema.type";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ErrorCode } from "@/constant/constant";

export const useSwrGeneric = <T>(endpoint: string) => {
    const { data, isLoading, error } = useSWR<ResponseType<T>>(endpoint);

    if (error) {
        throw new Error(error.message);
    }

    return { data: data?.data, isLoading, code: data?.code };
};

export const useGetMessages = (chatId: string) => {
    const router = useRouter();
    const { data, isLoading, code } = useSwrGeneric<MessageResponseType[]>(
        `/chats/${chatId}/messages`,
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
    }, [code]);

    return { messages: data, isLoading };
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
    }, [code]);

    return { user: data, isLoading };
};

export const useGetPreviews = () => {
    const { data, isLoading, code } =
        useSwrGeneric<PreviewMessageType[]>("/users/chats");
    useEffect(() => {
        if (code && code !== "SUCCESS") {
            throw new Error(code);
        }
    }, [code]);
    return { previews: data, isLoading };
};

export const useGetNotConnected = () => {
    const { data, isLoading, code } = useSwrGeneric<UserType[]>(
        "/users/not-connected",
    );
    useEffect(() => {
        if (code && code !== "SUCCESS") {
            throw new Error(code);
        }
    }, [code]);
    return { notConnected: data, isLoading };
};

export const useGetFiles = (chatId: string) => {
    const { data, isLoading, code } = useSwrGeneric<AttachmentType[]>(
        `/chats/${chatId}/attachments/files`,
    );
    const router = useRouter();
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
    }, [code]);
    return { files: data, isLoading };
};

export const useGetMedia = (chatId: string) => {
    const { data, isLoading, code } = useSwrGeneric<AttachmentType[]>(
        `/chats/${chatId}/attachments/media`,
    );
    const router = useRouter();
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
    }, [code]);
    return { media: data, isLoading };
};

export const useGetLinks = (chatId: string) => {
    const { data, isLoading, code } = useSwrGeneric<MetadataType[]>(
        `/chats/${chatId}/links`,
    );
    const router = useRouter();
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
    }, [code]);
    return { links: data, isLoading };
};
