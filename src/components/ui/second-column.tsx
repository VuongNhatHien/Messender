"use client";
import { uploadFiles } from "@/actions/actions";
import { ChatType } from "@/lib/type";
import { useState } from "react";
import ConversationBody from "./conversation-body";
import ConversationFooter from "./conversation-footer";
import ConversationHeader from "./conversation-header";
import { Separator } from "./separator";

export default function SecondColumn({ chat }: { chat: ChatType }) {
    const [isOver, setIsOver] = useState(false);

    // Define the event handlers
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(false);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(false);

        if (event.dataTransfer.files) {
            await uploadFiles(chat.chatId.toString(), event.dataTransfer.files);
        }
    };
    return (
        <div
            className="card col-span-2"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <>
                <ConversationHeader chat={chat} />
                <Separator />
                {isOver ? (
                    <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-secondary-foreground bg-secondary">
                        <p className="text-2xl font-medium text-secondary-foreground">
                            Drop files here
                        </p>
                    </div>
                ) : (
                    <>
                        <ConversationBody chat={chat} />
                        <ConversationFooter chat={chat} />
                    </>
                )}
            </>
        </div>
    );
}
