"use client";

import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import {
    ChatType,
    MessageResponseType,
} from "@/types/response.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const [chat, setChat] = useState<ChatType | null>(null);

    useEffect(() => {
        socket.emit("joinChat", chatId);

        const handleReceiveMessage = (newMessage: MessageResponseType) => {
            //append chat at the start
            setChat((prevChat) => {
                if (!prevChat) {
                    return null;
                }
                return {
                    ...prevChat,
                    messages: [newMessage, ...prevChat.messages],
                };
            });
            console.log("Message received", newMessage);
        };

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.emit("leaveChat", chatId);
        };
    }, [chatId]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const messages = (await requests.getMessages(chatId)).data;

                const user = (await requests.getUserFromChat(chatId)).data;
                if (user && messages) {
                    setChat({
                        id: parseInt(chatId),
                        messages: messages,
                        user: user,
                    });
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRequest();
    }, [chatId]);

    useEffect(() => {
        if (!loading && !chat) {
            router.push("/chats");
        }
    }, [router, loading, chat]);

    if (loading) {
        return (
            <div className="w-fulls flex h-full w-full items-center justify-center">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
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
