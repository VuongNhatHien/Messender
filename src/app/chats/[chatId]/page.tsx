"use client";

import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import { useGetMessages } from "@/hooks/hooks";
import socket from "@/lib/socket";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { mutate } from "swr";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const { mutate: mutateMessage } = useGetMessages(chatId);

    useEffect(() => {
        mutateMessage();
        const handleReceiveMessage = () => {
            mutateMessage();
            mutate(`/users/chats`);
            mutate(`/chats/${chatId}/attachments/media`);
            mutate(`/chats/${chatId}/attachments/files`);
            mutate(`/chats/${chatId}/links`);
        };

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
        };
    }, [chatId]);

    return (
        <>
            <SecondColumn />
            <ThirdColumn />
        </>
    );
}
