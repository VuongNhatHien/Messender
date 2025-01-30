"use client";

import { sendMessage } from "@/actions/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function SendMessageBox() {
    const router = useRouter();
    const [state, action, pending] = useActionState(sendMessage, undefined);

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
            className="flex w-full items-center gap-3"
            action={action} //Server-side validation
            onSubmit={handleSubmit} //Client-side validation
        >
            <Textarea
                name="message"
                placeholder="Message"
                className="bg-accent text-accent-foreground resize-none"
                onKeyDown={handleKeyDown}
            />
            <button type="submit" disabled={pending}>
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
            </button>
        </form>
    );
}
