"use client";

import Image from "next/image";
import { useState } from "react";
import { Textarea } from "./textarea";
import socket from "@/lib/socket";
import { requests } from "@/request/requests";

export default function SendMessageBox({ chatId }: { chatId: string }) {
    const [message, setMessage] = useState("");
    const [pending, setPending] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPending(true);
        if (message) {
            const res = (await requests.sendMessage(chatId, message)).data;
            socket.emit("sendMessage", { chatId, message: res });
        }
        setPending(false);
        setMessage("");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents a new line
            event.currentTarget.form?.requestSubmit(); // Submits the form
        }
    };

    return (
        <form
            className="flex w-full items-center gap-4"
            onSubmit={handleSubmit}
        >
            <Textarea
                name="message"
                placeholder="Message"
                className="bg-accent text-accent-foreground"
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                value={message}
            />
            <button type="submit" disabled={pending}>
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
            </button>
        </form>
    );
}
