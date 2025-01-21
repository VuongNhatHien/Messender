"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { previewMessage } from "@/mock/mock";

export default function Home() {
    const [state] = useState(false);
    const params = useParams<{ slug: string }>();
    const chat = previewMessage.find(
        (chat) => chat.id.toString() === params.slug,
    );

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
                            <AvatarImage src={chat?.avatar} />
                            {/* <AvatarFallback>Null</AvatarFallback> */}
                        </Avatar>

                        <div className="ml-4 text-lg">
                            <p className="line-clamp-1 font-semibold">
                                {chat.name}
                            </p>
                        </div>
                    </div>
                </div>
                <Separator />
            </div>
            <div className="card col-span-1"></div>
        </>
    );
}
