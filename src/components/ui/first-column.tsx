"use client";
import Loading from "@/app/loading";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import { useGetPreviews } from "@/hooks/hooks";
import socket from "@/lib/socket";
import { requests } from "@/lib/requests";
import { useEffect } from "react";
import { mutate } from "swr";
import AddUserDialog from "./add-user-dialog";
import PreviewCard from "./preview-card";

export default function FirstColumn() {
    const { previews, isLoading } = useGetPreviews();

    useEffect(() => {
        const handleListenChatRequest = async () => {
            const meId = (await requests.getMe()).data?.id;
            socket.emit("listenChatRequest", `userId-${meId}`);
        };
        handleListenChatRequest();

        const handleReceiveMessage = () => {
            mutate(`/users/chats`);
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
    }, []);

    useEffect(() => {
        previews?.forEach((preview) => {
            socket.emit("joinChat", `chatId-${preview.chatId}`);
        });
    }, [previews]);

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
