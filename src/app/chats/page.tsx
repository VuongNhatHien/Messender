"use client";

import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { mutate } from "swr";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    useEffect(() => {
        const handleListenChatRequest = async () => {
            const meId = (await requests.getMe()).data?.id;
            socket.emit("listenChatRequest", `userId-${meId}`);
        };
        handleListenChatRequest();

        const handleReceiveMessage = () => {
            mutate(`http://localhost:8080/chats/${chatId}/messages`);
            mutate(`http://localhost:8080/users/chats`);
            mutate(`http://localhost:8080/chats/${chatId}/attachments/media`);
            mutate(`http://localhost:8080/chats/${chatId}/attachments/files`);
            mutate(`http://localhost:8080/chats/${chatId}/links`);
        };

        socket.on("receiveMessage", handleReceiveMessage);

        const handleReceiveChatRequest = async () => {
            mutate(`http://localhost:8080/users/chats`);
        };

        socket.on("receiveChatRequest", handleReceiveChatRequest);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("receiveChatRequest", handleReceiveChatRequest);
        };
    }, []);
    return (
        <div className="card flex w-3/4 items-center justify-center">
            <p className={"text-2xl font-bold"}>No chats selected</p>
        </div>
    );
}
