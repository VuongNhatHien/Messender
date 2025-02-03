"use client";

import { ChatType } from "@/lib/type";
import { File, Image, Link as LinkLucide } from "lucide-react";
import { useState } from "react";
import Attachments from "./attachments";
import { Avatar, AvatarImage } from "./avatar";

const attachmentCards = [
    {
        name: "Media",
        icon: <Image />,
    },
    {
        name: "Files",
        icon: <File />,
    },
    {
        name: "Links",
        icon: <LinkLucide />,
    },
]

export default function ThirdColumn({ chat }: { chat: ChatType }) {
    const [page, setPage] = useState("default");

    return (
        <div className="card col-span-1">
            <div className="flex flex-col items-center px-3 pt-4">
                {page === "default" ? (
                    <>
                    <Avatar className="size-20">
                        <AvatarImage src={chat.user.avatar} />
                    </Avatar>
                    <div className="mt-2 text-center">
                        <p className="text-xl font-semibold">
                            {chat.user.name}
                        </p>
                    </div>
                    <div className="mt-4 w-full">
                        {attachmentCards.map((attachment, index) => (
                            <button
                                key={index}
                                className="card-link gap-2 py-3"
                                onClick={() => setPage(attachment.name.toLowerCase())}
                            >
                                {attachment.icon}
                                <p className="font-semibold">{attachment.name}</p>
                            </button>
                        ))}
                    </div>
                </>
                ) : (
                    <Attachments page={page} setPage={setPage} chatId={chat.chatId.toString()} />
                )}
            </div>
        </div>
    );
}
