"use client";
import { uploadFiles } from "@/actions/actions";
import { ChatType } from "@/lib/type";
import { useState } from "react";
import ConversationBody from "./conversation-body";
import ConversationFooter from "./conversation-footer";
import ConversationHeader from "./conversation-header";
import { Separator } from "./separator";
import { FolderUp } from "lucide-react";
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
            className="card w-1/2"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <>
                <ConversationHeader chat={chat} />
                <Separator />
                <div className="relative flex h-full flex-col overflow-hidden">
                    <ConversationBody chat={chat} />
                    <ConversationFooter chat={chat} />
                    {isOver && (
                        <div className="absolute inset-0 flex h-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-foreground bg-background opacity-85">
                            <p className="text-2xl font-bold text-secondary-foreground">
                                Drop files here
                            </p>
                            <FolderUp size={48} />
                        </div>
                    )}
                </div>
            </>
        </div>
    );
}
