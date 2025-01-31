"use client";

import { sendMessage } from "@/actions/actions";
import Image from "next/image";
import { useActionState } from "react";
import { Textarea } from "./textarea";

export default function SendMessageBox({ chatId }: { chatId: string }) {
    const [state, action, pending] = useActionState(
        sendMessage.bind(null, chatId),
        undefined,
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const message = formData.get("message");

        if (!message || !message.toString().trim()) {
            event.preventDefault(); // Prevent form submission
        }
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
            action={action} //Server-side validation
            onSubmit={handleSubmit} //Client-side validation
        >
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
