"use client";

import SecondColumn from "@/components/ui/second-column";
import ThirdColumn from "@/components/ui/third-column";
import { requests } from "@/request/requests";
import { ChatType } from "@/types/response.type";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { chatId } = useParams<{ chatId: string }>();
    const [loading, setLoading] = useState(true);

    const [chat, setChat] = useState<ChatType | null>(null);

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
                    <SecondColumn/>
                    <ThirdColumn />
                </>
            )}
        </>
    );
}
