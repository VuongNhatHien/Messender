"use client";

import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import { ChatType, MessageResponseType } from "@/types/response.type";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { mutate } from "swr";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const [loading, setLoading] = useState(true);

    const [chat, setChat] = useState<ChatType | null>(null);

    useEffect(() => {
        const handleReceiveMessage = (newMessage: MessageResponseType) => {
            // console.log("Mess rec", newMessage);
            // setChat((prevChat) => {
            //     if (!prevChat) {
            //         return null;
            //     }
            //     return {
            //         ...prevChat,
            //         messages: [newMessage, ...prevChat.messages],
            //     };
            // });
            mutate(`http://localhost:8080/chats/${chatId}/messages`);
            mutate(`http://localhost:8080/users/chats`);
            mutate(`http://localhost:8080/chats/${chatId}/attachments/media`);
            mutate(`http://localhost:8080/chats/${chatId}/attachments/files`);
        };

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
        };
    }, []);

    useEffect(() => {
        const fetchRequest = async () => {
            const messages = (await requests.getMessages(chatId)).data;

            const user = (await requests.getUserFromChat(chatId)).data;
            if (user && messages) {
                setChat({
                    id: parseInt(chatId),
                    messages: messages,
                    user: user,
                });
            }
            setLoading(false);
        };
        fetchRequest();
    }, [chatId]);

    if (loading) {
        return (
            <div className="flex h-full w-3/4 items-center justify-center">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }
    if (!chat) {
        notFound();
    }

    return (
        <>
            {chat && (
                <>
                    <SecondColumn chat={chat} />
                    <ThirdColumn chat={chat} />
                </>
            )}
        </>
    );
}
