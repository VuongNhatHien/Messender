"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { chat } from "@/mock/mock";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [state] = useState(false);
    const params = useParams<{ slug: string }>();

    if (!chat) {
        return (
            <div className="card col-span-3 flex items-center justify-center">
                <p className={"text-2xl font-bold"}>No chats selected</p>
            </div>
        );
    }

    return (
        <>
            <div className="card col-span-2">
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
                <div className="flex h-full flex-col-reverse justify-start gap-4 overflow-auto p-4">
                    {chat.messages
                        .slice()
                        .reverse()
                        .map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    message.sender.userId === chat.user.userId
                                        ? "justify-start"
                                        : "justify-end"
                                }`}
                            >
                                <div
                                    className={`max-w-[75%] rounded-[20px] px-3 py-2 ${
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
                            <Paperclip className="hover:text-primary cursor-pointer"/>
                        </label>
                        <input id="file" type="file" className="hidden" />

                        <Input
                            type="text"
                            placeholder="Message"
                            className="rounded-full bg-accent text-accent-foreground"
                        />
                        <button>
                            <img
                                src="/logo.png" // Replace with the actual path to your logo
                                alt="Logo"
                                className="h-7 w-auto" // Adjust height and width as needed
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="card col-span-1"></div>
        </>
    );
}
