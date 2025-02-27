"use client";

import Image from "next/image";
import { useActionState, useEffect } from "react";
import { Textarea } from "./textarea";
import socket from "@/lib/socket";
import { mutate } from "swr";
import { sendMessage } from "@/actions/actions.common";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/lib/fetcher";
import { LIMIT } from "@/constant/constant";
import { useGetMessages } from "@/hooks/hooks";

export default function SendMessageBox({ chatId }: { chatId: string }) {
    const [state, action, pending] = useActionState(
        sendMessage.bind(null, chatId),
        undefined,
    );

    const { mutate: mutateMessage } = useGetMessages(chatId);
    useEffect(() => {
        if (state) {
            socket.emit("sendMessage", {
                chatId: `chatId-${chatId}`,
                message: state,
            });
            if (state.metadataId) {
                mutate(`/chats/${chatId}/links`);
            }
            mutateMessage();
            mutate(`/users/chats`);
        }
    }, [state, chatId]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents a new line
            event.currentTarget.form?.requestSubmit(); // Submits the form
        }
    };

    return (
        <form className="flex w-full items-center gap-4" action={action}>
            <Textarea
                name="message"
                placeholder="Message"
                className="bg-accent text-accent-foreground"
                onKeyDown={handleKeyDown}
            />
            <button type="submit" disabled={pending}>
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
            </button>
        </form>
    );
}
