"use client";
import Searchbar from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import { useGetNotConnected, useGetPreviews } from "@/hooks/hooks";
import { requests } from "@/lib/requests";
import socket from "@/lib/socket";
import { useEffect } from "react";
import AddUserDialog from "./add-user-dialog";
import FirstColumnBody from "./first-column-body";
import FirstColumnHeader from "./first-column-header";

export default function FirstColumn() {
    const { previews, mutate: mutatePreviews } = useGetPreviews();
    const { mutate: mutateNotConnected } = useGetNotConnected();

    useEffect(() => {
        const handleListenChatRequest = async () => {
            const meId = (await requests.getMe()).data?.id;
            socket.emit("listenChatRequest", `userId-${meId}`);
        };
        handleListenChatRequest();

        const handleReceiveMessage = () => {
            mutatePreviews();
        };

        const handleReceiveChatRequest = () => {
            mutatePreviews();
            mutateNotConnected();
        };

        socket.on("receiveMessage", handleReceiveMessage);
        socket.on("receiveChatRequest", handleReceiveChatRequest);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("receiveChatRequest", handleReceiveChatRequest);
        };
    }, []);

    useEffect(() => {
        previews?.forEach((preview) => {
            preview && socket.emit("joinChat", `chatId-${preview.chatId}`);
        });
    }, [previews]);

    return (
        <div className="card w-1/4">
            <FirstColumnHeader />
            <Separator className={"mt-4"} />
            <FirstColumnBody />
        </div>
    );
}
