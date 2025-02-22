"use client";
import { PreviewMessageType } from "@/types/schema.type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Avatar, AvatarImage } from "./avatar";

export default function PreviewCard({
    preview,
}: {
    preview: PreviewMessageType;
}) {
    const chatId = useParams<{ chatId: string }>().chatId;

    return (
        <Link
            key={preview.chatId}
            className={`card-link ${chatId === `${preview.chatId}` ? "border-2 bg-accent shadow" : "text-accent-foreground"}`}
            href={`/chats/${preview.chatId}`}
        >
            <Avatar className="size-12">
                <AvatarImage src={preview.user.avatar} />
                {/* <AvatarFallback>Null</AvatarFallback> */}
            </Avatar>

            <div className="ml-4 w-full overflow-hidden">
                <p className="truncate font-semibold">
                    {preview.user.displayName}
                </p>
                <p className="truncate text-muted-foreground">
                    {preview.lastMessage?.message ?? "No messages"}
                </p>
            </div>
        </Link>
    );
}
