"use client";

import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import socket from "@/lib/socket";
import { requests } from "@/request/requests";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GetMessageResponseType } from "@/types/response.type";
import { UserType } from "@/types/schema.type";
import { useRouter } from "next/navigation";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const [messages, setMessages] = useState<GetMessageResponseType>([]);
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        socket.emit("joinChat", chatId);

        return () => {
            socket.emit("leaveChat", chatId);
        };
    }, [chatId]);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result1 = await requests.getChat(chatId);
                setMessages(result1.data);

                const result2 = await requests.getUserFromChat(chatId);
                if (result2.data) {
                    setUser(result2.data);
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
        if (!loading && (!user || !messages)) {
            router.push("/chats");
        }
    }, [user, messages, router, loading]);

    if (loading) {
        return (
            <div className="w-fulls flex h-full w-full items-center justify-center">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }

    if (!user || !messages) {
        return null;
    }

    const chat = {
        id: parseInt(chatId),
        messages: messages,
        user: user,
    };

    return (
        <>
            <SecondColumn chat={chat} />
            <ThirdColumn chat={chat} />
        </>
    );
}
