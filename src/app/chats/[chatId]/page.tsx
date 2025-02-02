import Conversation from "@/components/ui/conversation";
import ThirdColumn from "@/components/ui/third-column";
import { findChatById } from "@/mocks/mock";

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
