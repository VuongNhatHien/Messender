"use client";
import Loading from "@/app/loading";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import { useGetMessages, useGetPreviews } from "@/hooks/hooks";
import socket from "@/lib/socket";
import { requests } from "@/lib/requests";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { mutate } from "swr";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";
import { MessageResponseType } from "@/types/response.type";

export default function FirstColumn() {
    const { chatId } = useParams<{ chatId: string }>();
    const { previews, isLoading } = useGetPreviews();

    useEffect(() => {
        const handleListenChatRequest = async () => {
            const meId = (await requests.getMe()).data?.id;
            socket.emit("listenChatRequest", `userId-${meId}`);
        };
        handleListenChatRequest();
    }, []);

    useEffect(() => {
        previews?.forEach((preview) => {
            socket.emit("joinChat", `chatId-${preview.chatId}`);
        });
    }, [previews]);

    useEffect(() => {
        const handleReceiveMessage = (message: MessageResponseType) => {
            mutate(`/chats/${message.chatId}/messages`);
            mutate(`/users/chats`);
            mutate(`/chats/${message.chatId}/attachments/media`);
            mutate(`/chats/${message.chatId}/attachments/files`);
            mutate(`/chats/${message.chatId}/links`);
        };

        socket.on("receiveMessage", handleReceiveMessage);

        const handleReceiveChatRequest = () => {
            mutate(`/users/chats`);
            mutate(`/users/not-connected`);
        };

        socket.on("receiveChatRequest", handleReceiveChatRequest);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("receiveChatRequest", handleReceiveChatRequest);
        };
    }, [chatId]);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="card w-1/4">
            <div
                className={"header flex items-center justify-between px-4 py-3"}
            >
                <p className={"text-2xl font-bold"}>Chats</p>

                <AddUserDialog />
            </div>
            <div className={"px-3"}>
                <Searchbar />
            </div>

            <Separator className={"mt-4"} />
            <div className="h-full space-y-1 overflow-auto px-1 py-1">
                {previews?.map((preview) => (
                    <PreviewCard key={preview.chatId} preview={preview} />
                ))}
            </div>
        </div>
    );
}
