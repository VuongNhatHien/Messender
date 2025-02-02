"use client";
import { ChatType } from "@/lib/type";
import { Avatar, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import { Paperclip } from "lucide-react";
import SendMessageBox from "./send-message-box";
import { useState } from "react";
import { uploadFiles } from "@/actions/actions";

export default function Conversation({ chat }: { chat: ChatType }) {
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
    const handleUploadFiles = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (event.target.files) {
            await uploadFiles(chat.chatId.toString(), event.target.files);
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
                <div
                    className={
                        "header flex items-center justify-between px-4 py-3"
                    }
                >
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src={chat.user.avatar} />
                        </Avatar>

                        <div className="ml-4 text-lg">
                            <p className="line-clamp-1 font-semibold">
                                {chat.user.name}
                            </p>
                        </div>
                    </div>
                </div>
                <Separator />
                {isOver ? (
                    <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-secondary-foreground bg-secondary">
                        <p className="text-2xl font-medium text-secondary-foreground">
                            Drop files here
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
                            {chat.messages
                                .slice()
                                .reverse()
                                .map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${
                                            message.sender.userId ===
                                            chat.user.userId
                                                ? "justify-start"
                                                : "justify-end"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-[75%] rounded-3xl px-3 py-2 ${
                                                message.sender.userId ===
                                                chat.user.userId
                                                    ? "bg-secondary text-secondary-foreground"
                                                    : "bg-primary text-primary-foreground"
                                            }`}
                                        >
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div>
                            <div className="mb-4 flex items-center gap-4 px-4">
                                <label htmlFor="file">
                                    <Paperclip className="cursor-pointer hover:text-primary" />
                                </label>
                                <input
                                    id="file"
                                    type="file"
                                    className="hidden"
                                    multiple
                                    onChange={handleUploadFiles}
                                />

                                <SendMessageBox
                                    chatId={chat.chatId.toString()}
                                />
                            </div>
                        </div>
                    </>
                )}
            </>
        </div>
    );
}
