"use client";

import Image from "next/image";
import { useActionState, useEffect } from "react";
import { Textarea } from "./textarea";
import socket from "@/lib/socket";
import { mutate } from "swr";
import { sendMessage } from "@/actions/actions.common";

export default function SendMessageBox({ chatId }: { chatId: string }) {
    const [state, action, pending] = useActionState(
        sendMessage.bind(null, chatId),
        undefined,
    );

    useEffect(() => {
        if (state) {
            socket.emit("sendMessage", {
                chatId: `chatId-${chatId}`,
                message: state,
            });
            mutate(`http://localhost:8080/chats/${chatId}/messages`);
            mutate(`http://localhost:8080/users/chats`);
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
