"use client";
import Loading from "@/app/loading";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import fetcher from "@/lib/fetcher";
import socket from "@/lib/socket";
import { AddChatResponseType, PreviewMessageType } from "@/types/response.type";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";
import { requests } from "@/request/requests";
import { useParams } from "next/navigation";

export default function FirstColumn() {
    const { chatId } = useParams<{ chatId: string }>();

    const { data: previews } = useSWR<PreviewMessageType[]>(
        `http://localhost:8080/users/chats`,
        fetcher,
    );

    useEffect(() => {
        previews?.forEach((preview) => {
            socket.emit("joinChat", `chatId-${preview.chatId}`);
        });
    }, [previews]);

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

        const handleReceiveChatRequest = () => {
            mutate(`http://localhost:8080/users/chats`);
            mutate(`http://localhost:8080/users/not-connected`);
        };

        socket.on("receiveChatRequest", handleReceiveChatRequest);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("receiveChatRequest", handleReceiveChatRequest);
        };
    }, [chatId]);

    if (!previews) {
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
                {previews.map((preview) => (
                    <PreviewCard key={preview.chatId} preview={preview} />
                ))}
            </div>
        </div>
    );
}
