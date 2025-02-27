"use client";

import { sendMessage } from "@/actions/actions.common";
import { useGetMessages } from "@/hooks/hooks";
import socket from "@/lib/socket";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { mutate } from "swr";
import { Textarea } from "./textarea";

export default function SendMessageBox({ chatId }: { chatId: string }) {
    const [state, action, pending] = useActionState(
        sendMessage.bind(null, chatId),
        undefined,
    );

    const { mutate: mutateMessage } = useGetMessages(chatId);
    useEffect(() => {
        if (state) {
            socket.emit("sendMessage", `chatId-${chatId}`);
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
