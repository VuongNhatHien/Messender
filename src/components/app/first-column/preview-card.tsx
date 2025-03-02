"use client";
import { PreviewMessageType } from "@/types/response.type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Avatar, AvatarImage } from "../../ui/avatar";

export default function PreviewCard({
    preview,
}: {
    preview: PreviewMessageType;
}) {
    const chatId = useParams<{ chatId: string }>().chatId;

    const renderLastMessage = () => {
        const { lastMessage, user } = preview;

        if (!lastMessage) {
            return "No messages yet";
        }

        const isSenderUser = lastMessage.senderId === user.id;
        const senderPrefix = isSenderUser ? "" : "You: ";

        if (lastMessage.message) {
            return `${senderPrefix}${lastMessage.message}`;
        }

        if (lastMessage.attachmentId) {
            return isSenderUser
                ? `${user.displayName} sent an attachment`
                : "You sent an attachment";
        }

        return "No messages yet";
    };

    return (
        <Link
            key={preview.chatId}
            className={`card-link ${chatId === `${preview.chatId}` ? "border-2 bg-accent shadow" : "text-accent-foreground"}`}
            href={`/chats/${preview.chatId}`}
        >
            <Avatar className="size-12">
                <AvatarImage
                    src={
                        preview.user.avatar
                            ? preview.user.avatar
                            : `/avatar.png`
                    }
                />
                {/* <AvatarFallback>Null</AvatarFallback> */}
            </Avatar>

            <div className="ml-4 w-full overflow-hidden">
                <p className="truncate font-semibold">
                    {preview.user.displayName}
                </p>
                <p className="truncate text-muted-foreground">
                    {renderLastMessage()}
                </p>
            </div>
        </Link>
    );
}
