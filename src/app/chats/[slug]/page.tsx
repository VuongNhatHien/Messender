"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { chat } from "@/mocks/mock";
import { Paperclip } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Chat() {
    // const [state] = useState(false);
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
                        <input id="file" type="file" className="hidden" />

                        <Input
                            type="text"
                            placeholder="Message"
                            className="rounded-full bg-accent text-accent-foreground"
                        />
                        <button>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="card col-span-1">
                <div className="flex flex-col items-center p-4">
                    <Avatar className="size-20">
                        <AvatarImage src={chat.user.avatar} />
                    </Avatar>
                    <div className="mt-4 text-center">
                        <p className="text-xl font-semibold">
                            {chat.user.name}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
