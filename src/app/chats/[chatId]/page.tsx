import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Conversation from "@/components/ui/conversation";
import SendMessageBox from "@/components/ui/send-message-box";
import { Separator } from "@/components/ui/separator";
import ThirdColumn from "@/components/ui/third-column";
import { findChatById } from "@/mocks/mock";
import { Paperclip, Image, File, Link as LinkLucide } from "lucide-react";
import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ chatId: string }>;
}) {
    const chatId = (await params).chatId;
    // const data = await fetch('https://api.vercel.app/blog')
    const chat = findChatById(chatId);
    if (!chat) {
        return (
            <div className="card col-span-3 flex items-center justify-center">
                <p className={"text-2xl font-bold"}>No chats selected</p>
            </div>
        );
    }

    return (
        <>
            <Conversation chat={chat} />
            <ThirdColumn chat={chat} />
        </>
    );
}
